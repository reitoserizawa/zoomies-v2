import { Prisma } from '@prisma/client';

import BaseModel from './base';

import prisma from '../utils/prisma_client';
import { PetInterface, PetModelInterface } from '../interfaces/pet';

class Pet extends BaseModel<PetInterface, 'Pet'> implements PetModelInterface {
    public_properties = [];

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

    static async create(properties: Prisma.PetCreateInput): Promise<Pet> {
        const new_pet = await prisma.pet.create({ data: properties });
        const pet = Pet.fromProperties(new_pet);

        return pet;
    }

    constructor(id: number) {
        super(id);
    }
}

export default Pet;
