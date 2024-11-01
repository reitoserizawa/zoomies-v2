import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { PetInterface, PetModelInterface } from '../interfaces/pet';
import PrismaClientModel from './prisma-client';
import User from './user';

class Pet extends BaseModel<PetInterface, 'Pet'> implements PetModelInterface {
    public_properties = ['name', 'owner', 'created_at'];
    updatable_properties = ['name', 'owner'];

    static model_name: Prisma.ModelName = 'Pet';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'pet';

    static override async fromId(id: number): Promise<Pet> {
        const pet = new Pet(id);
        await pet.fetch();

        return pet;
    }

    static override fromProperties(properties: PetInterface): Pet {
        const pet = new Pet(properties.id);
        pet.setProperties(properties);

        return pet;
    }

    static async create(properties: Prisma.PetCreateInput, owner: User): Promise<Pet> {
        const owner_info = Prisma.validator<Prisma.UserWhereInput>()({
            id: owner.id
        });

        const validated_payload = Prisma.validator<Prisma.PetCreateInput>()({
            name: properties.name,
            owner: {
                connect: owner_info
            }
        });

        const new_pet = await PrismaClientModel.prisma.pet.create({ data: { ...validated_payload } });
        const pet = Pet.fromProperties(new_pet);

        return pet;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'Pet';
        this.uncap_model_name = 'pet';
    }
}

export default Pet;
