import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { PetInterface, PetModelInterface } from '../interfaces/pet';
import PrismaClientModel from './prisma-client';
import User from './user';
import DogParkCheckIn from './dog-park-check-in';

class Pet extends BaseModel<PetInterface, 'Pet'> implements PetModelInterface {
    public_properties: (keyof PetInterface)[] = ['name', 'owner', 'type', 'breed', 'birthday', 'owner_id', 'created_at', 'introduction'];
    include_properties: (keyof PetInterface)[] = ['owner', 'dog_park_check_ins'];
    updatable_properties: (keyof PetInterface)[] = ['name', 'owner', 'type', 'breed', 'birthday'];

    static model_name: Prisma.ModelName = 'Pet';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'pet';

    static override async fromId(id: number): Promise<Pet> {
        const pet = new Pet(id);
        await pet.fetch();

        return pet;
    }

    static async fromIds(ids: number[]): Promise<Pet[]> {
        const pets = ids.map(id => new Pet(id));
        await Promise.all(pets.map(p => p.fetch()));

        return pets;
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
            },
            type: 'Dog',
            breed: properties.breed,
            birthday: properties.birthday,
            introduction: properties.introduction,
            characteristics: properties.characteristics
        });

        const new_pet = await PrismaClientModel.prisma.pet.create({ data: { ...validated_payload } });
        const pet = Pet.fromProperties(new_pet);

        return pet;
    }

    async hasActiveDogParkCheckIn(): Promise<boolean> {
        const dog_park_check_ins = await DogParkCheckIn.fromPet(this);

        if (dog_park_check_ins.some(check_in => check_in.properties.active)) {
            return true;
        } else {
            return false;
        }
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'Pet';
        this.uncap_model_name = 'pet';
    }
}

export default Pet;
