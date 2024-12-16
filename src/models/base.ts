import { Prisma } from '@prisma/client';

import { BaseModelInterface, IncludeInput, IncludeRelations, ValidateInput, WhereInput } from '../interfaces/base';

import PrismaClientModel from './prisma-client';

import { BadRequestError, NotFoundError } from './errors';

import capitalizeFirstLetter from '../utils/capitalize-first-letter';

class BaseModel<P, MN extends Prisma.ModelName> implements BaseModelInterface<P> {
    prisma: PrismaClientModel;

    properties: P;
    model_name: MN;
    uncap_model_name: Uncapitalize<MN>;

    public_properties: (keyof P)[];
    include_properties?: (keyof P)[];
    updatable_properties: (keyof P)[];

    // override in subclass
    static async fromId(id: number): Promise<any> {
        const obj = new this(id);
        await obj.fetch();

        return obj;
    }

    // override in subclass
    static fromProperties(properties: any): any {
        const obj = new this(properties.id);
        obj.setProperties(properties);
        return obj;
    }

    static buildIncludeObject(inputs: IncludeInput): IncludeRelations {
        const include: any = {};

        inputs.forEach((input: string | string[]) => {
            if (typeof input === 'string') {
                include[input] = true;
            } else if (Array.isArray(input)) {
                let current = include;

                input.forEach((key, index) => {
                    if (!current[key]) {
                        current[key] = { include: {} };
                    }

                    if (index === input.length - 1) {
                        current[key] = true;
                    } else {
                        current = current[key].include;
                    }
                });
            }
        });

        return { include };
    }

    static async fromQuery<P, M>(query: Partial<P>, uncap_model_name?: Uncapitalize<Prisma.ModelName>, include_input?: IncludeInput): Promise<M> {
        if (!uncap_model_name) {
            throw new BadRequestError('Model name is required');
        }

        const model = PrismaClientModel.prisma[uncap_model_name];
        if (!model) {
            throw new BadRequestError(`Invalid model name: ${uncap_model_name}`);
        }

        const include_properties = include_input && BaseModel.buildIncludeObject(include_input);

        // @ts-expect-error
        const item = await model.findUnique({ where: query, ...include_properties });

        if (!item) {
            throw new NotFoundError(`${capitalizeFirstLetter(uncap_model_name)} not found`);
        }

        return this.fromProperties(item);
    }

    static async manyFromQuery<P, M>(query: Partial<P>, uncap_model_name: Uncapitalize<Prisma.ModelName>, include_input?: IncludeInput, limit?: number): Promise<M[]> {
        if (!uncap_model_name) {
            throw new BadRequestError('Model name is required');
        }

        const model = PrismaClientModel.prisma[uncap_model_name];
        if (!model) {
            throw new BadRequestError(`Invalid model name: ${uncap_model_name}`);
        }

        const include_properties = include_input && BaseModel.buildIncludeObject(include_input);

        //@ts-expect-error
        const items = await model.findMany({
            where: query,
            ...include_properties,
            take: limit ? limit : undefined
        });

        return items.map((item: P) => this.fromProperties(item));
    }

    static async getAll<P, M>(uncap_model_name: Uncapitalize<Prisma.ModelName>): Promise<M[]> {
        const model = PrismaClientModel.prisma[uncap_model_name];

        // @ts-expect-error
        const items = await model.findMany({
            include: {
                address: true
            }
        });

        if (!items || items.length === 0) {
            throw new NotFoundError(`${capitalizeFirstLetter(uncap_model_name)}s not found`);
        }

        return items.map((item: P) => this.fromProperties(item));
    }

    constructor(public id: number) {}

    async fetch(): Promise<P> {
        if (!this.id) {
            throw new BadRequestError('ID not set');
        }
        return await this._fetch({ id: this.id } as WhereInput<MN>);
    }

    private async _fetch(query: WhereInput<MN>): Promise<P> {
        const model = PrismaClientModel.prisma[this.uncap_model_name];
        const include_query = this.prepareIncludeQuery();

        // @ts-expect-error
        const item = await model.findUnique({
            where: query,
            include: include_query
        });

        if (!item) {
            throw new NotFoundError(`${this.model_name} not found`);
        }

        this.setProperties(item);

        return item;
    }

    async update(update_input: ValidateInput<P>): Promise<P> {
        if (!this.id) {
            throw new BadRequestError('ID not set');
        }

        const model = PrismaClientModel.prisma[this.uncap_model_name];

        // @ts-expect-error
        const item = await model.update({
            where: {
                id: this.id
            },
            data: {
                ...update_input
            }
        });

        if (!item) {
            throw new NotFoundError(`${this.model_name} not found`);
        }

        this.setProperties(item);

        return item;
    }

    async delete(): Promise<P> {
        if (!this.id) {
            throw new BadRequestError('ID not set');
        }

        const model = PrismaClientModel.prisma[this.uncap_model_name];

        // @ts-expect-error
        const item = await model.delete({
            where: {
                id: this.id
            }
        });

        return item;
    }

    validate(data: ValidateInput<P>): ValidateInput<P> {
        const filteredProperties: ValidateInput<P> = {};

        for (const key in data) {
            if (this.updatable_properties.includes(key as keyof P)) {
                filteredProperties[key as keyof ValidateInput<P>] = data[key as keyof ValidateInput<P>];
            }
        }

        return filteredProperties;
    }

    async prepareForCollection(chain: string[] = []): Promise<P> {
        if (!this.properties) {
            throw new Error('Properties not set');
        }

        let _properties: P = await this.prepareSubObjectsForCollection(this.properties, chain);

        for (const key in _properties) {
            if (!(this.public_properties || []).includes(key) && key !== 'id') {
                delete _properties[key];
            }
        }

        return _properties;
    }

    async prepareSubObjectsForCollection(properties: P, chain: string[]): Promise<P> {
        const subObjects = this.subObjectsForCollection();
        const keys = Object.keys(subObjects);

        if (keys.length === 0) {
            return properties;
        }

        const _properties = { ...properties } as { [key: string]: any };

        // Prepare each sub-object for collection
        for (const key of keys) {
            const obj = subObjects[key];

            if (obj && !(Array.isArray(obj) && obj.length === 0)) {
                if (Array.isArray(obj)) {
                    _properties[key] = await Promise.all(
                        obj.map(async (item: BaseModel<any, any>) => {
                            const objName = `${item.constructor.name}_${key}_${item.id}`;

                            if (!chain.includes(objName)) {
                                chain.push(objName);
                                return await item.prepareForCollection(chain);
                            }
                            return undefined;
                        })
                    ).then(results => results.filter(Boolean));
                } else {
                    const objName = `${obj.constructor.name}_${key}_${obj.id}`;

                    if (!chain.includes(objName)) {
                        chain.push(objName);
                        _properties[key] = await obj.prepareForCollection(chain);
                    }
                }
            } else {
                _properties[key] = Array.isArray(obj) ? [] : undefined;
            }
        }

        return _properties as P;
    }

    prepareIncludeQuery<P extends { [key: string]: any }>(this: P): { [key in keyof P]?: boolean } | void {
        if (!this.include_properties) return;

        const include: { [key in keyof P]?: boolean } = {};

        for (const prop of this.include_properties) {
            include[prop as keyof P] = true;
        }

        return include;
    }

    setProperties(properties: P): P {
        this.properties = properties;

        return properties;
    }

    subObjectsForCollection(): { [key: string]: BaseModel<any, any> | BaseModel<any, any>[] } {
        return {};
    }
}

export default BaseModel;
