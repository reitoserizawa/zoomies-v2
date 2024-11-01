import { Prisma } from '@prisma/client';

import { BaseModelInterface, ExtractKeys, ValidateInput, WhereInput } from '../interfaces/base';

import PrismaClientModel from './prisma-client';

class BaseModel<P, MN extends Prisma.ModelName> implements BaseModelInterface<P> {
    prisma: PrismaClientModel;

    properties: P;

    model_name: MN;
    uncap_model_name: Uncapitalize<MN>;

    public_properties: string[];
    include_properties?: string[];

    updatable_properties: string[];

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

    static async fromQuery<P, K extends keyof P, M>(query: ExtractKeys<P, K>, uncap_model_name?: Uncapitalize<Prisma.ModelName>): Promise<M> {
        if (!uncap_model_name) {
            throw new Error('Model name is required.');
        }

        const model = PrismaClientModel.prisma[uncap_model_name];

        // @ts-expect-error
        const item = await model.findUnique({ where: query });

        if (!item) {
            throw new Error(`${uncap_model_name} not found.`);
        }

        return this.fromProperties(item);
    }

    static async manyFromQuery<T, K extends keyof T, M>(query: ExtractKeys<T, K>, uncap_model_name?: Uncapitalize<Prisma.ModelName>): Promise<M[]> {
        if (!uncap_model_name) {
            throw new Error('Model name is required.');
        }

        const model = PrismaClientModel.prisma[uncap_model_name];

        // @ts-expect-error
        const items = await model.findMany({ where: query });

        if (!items || items.length === 0) {
            throw new Error(`${uncap_model_name} not found.`);
        }

        return items.map((item: T) => this.fromProperties(item));
    }

    constructor(public id: number) {}

    async fetch(): Promise<P> {
        if (!this.id) {
            throw new Error('ID not set');
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
            throw new Error(`${this.model_name} not found.`);
        }

        this.setProperties(item);

        return item;
    }

    async update(update_input: ValidateInput<P>): Promise<P> {
        if (!this.id) {
            throw new Error('id not set');
        }

        const model = PrismaClientModel.prisma[this.uncap_model_name];

        // @ts-expect-error
        const item = await model.update({
            where: {
                id: this.id
            },
            data: {
                update_input
            }
        });

        if (!item) {
            throw new Error(`${this.model_name} not found.`);
        }

        this.setProperties(item);

        return item;
    }

    async delete(): Promise<P> {
        if (!this.id) {
            throw new Error('ID not set');
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
            if (this.updatable_properties.includes(key)) {
                filteredProperties[key as keyof ValidateInput<P>] = data[key as keyof ValidateInput<P>];
            }
        }

        return filteredProperties;
    }

    async prepareForCollection(chain: string[] = []): Promise<P> {
        if (!this.properties) {
            throw new Error('properties not set');
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

    prepareIncludeQuery(): { [key: string]: boolean } | void {
        if (!this.include_properties) return;

        const include: Record<string, boolean> = {};

        for (const prop of this.include_properties) {
            include[prop] = true;
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
