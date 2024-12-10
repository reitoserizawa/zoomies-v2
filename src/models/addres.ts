import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { AddressInterface, AddressModelInterface } from '../interfaces/address';
import PrismaClientModel from './prisma-client';

class Address extends BaseModel<AddressInterface, 'Address'> implements AddressModelInterface {
    public_properties: (keyof AddressInterface)[] = ['full_address', 'latitude', 'longtitude'];
    updatable_properties = [];

    static model_name: Prisma.ModelName = 'Address';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'address';

    static override async fromId(id: number): Promise<Address> {
        const address = new Address(id);
        await address.fetch();

        return address;
    }

    static override fromProperties(properties: AddressInterface): Address {
        const address = new Address(properties.id);
        address.setProperties(properties);

        return address;
    }

    static async create(properties: Prisma.AddressCreateInput): Promise<Address> {
        const full_address = properties.address + properties.address2 + properties.city + ',' + properties.district + properties.postal_code + properties.country;

        const validated_payload = Prisma.validator<Prisma.AddressCreateInput>()({
            full_address,
            address: properties.address,
            address2: properties.address2,
            city: properties.city,
            district: properties.district,
            postal_code: properties.postal_code,
            country: properties.country,
            latitude: properties.latitude,
            longtitude: properties.longtitude
        });

        const new_address = await PrismaClientModel.prisma.address.create({ data: { ...validated_payload } });
        const address = Address.fromProperties(new_address);

        return address;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'Address';
        this.uncap_model_name = 'address';
    }
}

export default Address;
