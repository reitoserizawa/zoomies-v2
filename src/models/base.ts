import { BaseModelInterface } from '../interfaces/base';

class BaseModel<T> implements BaseModelInterface<T> {
    properties: T;

    static fromProperties(properties: any): any {
        const obj = new this(properties.id);
        obj.setProperties(properties);
        return obj;
    }

    constructor(public id: number) {}

    setProperties(properties: T): T {
        this.properties = properties;

        return properties;
    }

    async preCollectionHook(properties: T): Promise<T> {
        return properties;
    }
}

export default BaseModel;
