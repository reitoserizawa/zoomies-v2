import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { DogParkInterface, DogParkModelInterface } from '../interfaces/dog-park';
import Address from './addres';

class DogPark extends BaseModel<DogParkInterface, 'DogPark'> implements DogParkModelInterface {
    public_properties: (keyof DogParkInterface)[] = ['name', 'address', 'type'];
    include_properties: (keyof DogParkInterface)[] = ['address'];
    updatable_properties = [];

    address?: Address;

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

    setAddress(): void {
        if (this.address) return;
        if (!this.properties.address) throw new Error("Dog park doesn't have an address property");

        this.address = Address.fromProperties(this.properties.address);
    }
}

export default DogPark;
