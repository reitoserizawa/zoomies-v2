import { Prisma } from '@prisma/client';
import { BaseModelInterface, WhereInput } from '../interfaces/base';

import prisma_client from '../utils/prisma_client';

class BaseModel<T, U extends Prisma.ModelName> implements BaseModelInterface<T> {
    properties: T;
    model_name: U;

    public_properties?: string[] = [];

    static async fromId(id: number): Promise<any> {
        const obj = new this(id);
        await obj.fetch();

        return obj;
    }

    static fromProperties(properties: any): any {
        const obj = new this(properties.id);
        obj.setProperties(properties);
        return obj;
    }

    static async fromQuery(model_name: Prisma.ModelName, query: any): Promise<any> {
        // @ts-ignore
        const model = prisma_client[model_name];
        const item = await model.findUnique({ where: query });

        if (!item) {
            throw new Error(`${model_name} not found.`);
        }

        return this.fromProperties(item);
    }

    async fetch(): Promise<T> {
        if (!this.id) {
            throw new Error('ID not set');
        }
        return await this._fetch({ id: this.id } as WhereInput<U>);
    }

    private async _fetch(query: WhereInput<U>): Promise<T> {
        // @ts-ignore
        const model = prisma_client[this.model_name];
        const item = await model.findUnique({ where: query });

        if (!item) {
            throw new Error(`${this.model_name} not found.`);
        }

        this.setProperties(item);
        return item;
    }

    constructor(public id: number) {}

    setProperties(properties: T): T {
        this.properties = properties;
        return properties;
    }

    async prepareForCollection(): Promise<T> {
        if (!this.properties) {
            throw new Error('properties not set');
        }

        let _properties: T = {
            ...(await this.preCollectionHook(this.properties))
        };

        for (const key in _properties) {
            if (!(this.public_properties || []).includes(key) && key !== 'id') {
                delete _properties[key];
            }
        }

        return _properties;
    }

    async preCollectionHook(properties: T): Promise<T> {
        return properties;
    }
}

export default BaseModel;
