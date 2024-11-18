import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { DogParkInterface, DogParkModelInterface } from '../interfaces/dog-park';

class DogPark extends BaseModel<DogParkInterface, 'DogPark'> implements DogParkModelInterface {
    public_properties = ['name', 'address', 'type', 'geo'];
    updatable_properties = [];

    static model_name: Prisma.ModelName = 'DogPark';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'dogPark';

    static override async fromId(id: number): Promise<DogPark> {
        const dog_park = new DogPark(id);
        await dog_park.fetch();

        return dog_park;
    }

    static override fromProperties(properties: DogParkInterface): DogPark {
        const dog_park = new DogPark(properties.id);
        dog_park.setProperties(properties);

        return dog_park;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'DogPark';
        this.uncap_model_name = 'dogPark';
    }
}

export default DogPark;
