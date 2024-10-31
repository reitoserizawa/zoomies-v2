import { Prisma } from '@prisma/client';

import { BaseModelInterface, ExtractKeys, WhereInput } from '../interfaces/base';

import PrismaClientModel from './prisma-client';

class BaseModel<P, MN extends Prisma.ModelName> implements BaseModelInterface<P> {
    prisma: PrismaClientModel;

    properties: P;

    model_name: MN;
    uncap_model_name: Uncapitalize<MN>;

    public_properties?: string[] = [];

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

    static async fromQuery<T, K extends keyof T, M>(query: ExtractKeys<T, K>, uncap_model_name?: Uncapitalize<Prisma.ModelName>): Promise<M> {
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

    async fetch(): Promise<P> {
        if (!this.id) {
            throw new Error('ID not set');
        }
        return await this._fetch({ id: this.id } as WhereInput<MN>);
    }

    private async _fetch(query: WhereInput<MN>): Promise<P> {
        console.log(this);
        const model = PrismaClientModel.prisma[this.uncap_model_name];

        // @ts-expect-error
        const item = await model.findUnique({ where: query });

        if (!item) {
            throw new Error(`${this.model_name} not found.`);
        }

        this.setProperties(item);

        return item;
    }

    constructor(public id: number) {}

    setProperties(properties: P): P {
        this.properties = properties;

        return properties;
    }

    async prepareForCollection(): Promise<P> {
        if (!this.properties) {
            throw new Error('properties not set');
        }

        let _properties: P = {
            ...(await this.preCollectionHook(this.properties))
        };

        for (const key in _properties) {
            if (!(this.public_properties || []).includes(key) && key !== 'id') {
                delete _properties[key];
            }
        }

        return _properties;
    }

    async preCollectionHook(properties: P): Promise<P> {
        return properties;
    }
}

export default BaseModel;
