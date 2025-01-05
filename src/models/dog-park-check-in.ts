import { Prisma } from '@prisma/client';

import { DogParkCheckInInterface, DogParkCheckInModelInterface } from '../interfaces/dog-park-check-in';

import BaseModel from './base';
import User from './user';
import Pet from './pet';
import DogPark from './dog-park';
import PrismaClientModel from './prisma-client';

class DogParkCheckIn extends BaseModel<DogParkCheckInInterface, 'DogParkCheckIn'> implements DogParkCheckInModelInterface {
    public_properties: (keyof DogParkCheckInInterface)[] = ['active', 'checked_in_at', 'checked_out_at', 'dog_park', 'dog_park_id', 'pet', 'pet_id', 'user', 'user_id'];
    include_properties: (keyof DogParkCheckInInterface)[] = ['dog_park', 'pet', 'user'];
    updatable_properties: (keyof DogParkCheckInInterface)[] = ['pet', 'dog_park', 'active', 'checked_in_at', 'checked_out_at'];

    user?: User;

    static override async fromId(id: number): Promise<DogParkCheckIn> {
        const check_in = new DogParkCheckIn(id);
        await check_in.fetch();

        return check_in;
    }

    static async fromIds(ids: number[]): Promise<DogParkCheckIn[]> {
        const check_ins = ids.map(id => new DogParkCheckIn(id));
        await Promise.all(check_ins.map(async check_in => await check_in.fetch()));

        return check_ins;
    }

    static override fromProperties(properties: DogParkCheckInInterface): DogParkCheckIn {
        const check_in = new DogParkCheckIn(properties.id);
        check_in.setProperties(properties);

        return check_in;
    }

    static async fromUser(user: User, limit?: number): Promise<DogParkCheckIn[]> {
        const user_id = user.id;
        return await DogParkCheckIn.manyFromQuery<DogParkCheckInInterface, DogParkCheckIn>({ user_id }, 'dogParkCheckIn', ['dog_park', 'pet', 'user'], limit, { created_at: 'desc' });
    }

    static async fromPet(pet: Pet): Promise<DogParkCheckIn[]> {
        const pet_id = pet.id;
        return await DogParkCheckIn.manyFromQuery<DogParkCheckInInterface, DogParkCheckIn>({ pet_id }, 'dogParkCheckIn', ['dog_park']);
    }

    static async activeFromPet(pet: Pet): Promise<DogParkCheckIn | null> {
        const pet_id = pet.id;
        return await DogParkCheckIn.findFirst<DogParkCheckInInterface, DogParkCheckIn>({ pet_id, active: true }, 'dogParkCheckIn', ['dog_park']);
    }

    static async fromDogPark(dog_park: DogPark, limit?: number): Promise<DogParkCheckIn[]> {
        const dog_park_id = dog_park.id;
        return await DogParkCheckIn.manyFromQuery<DogParkCheckInInterface, DogParkCheckIn>({ dog_park_id }, 'dogParkCheckIn', ['pet', 'user'], limit, { created_at: 'desc' });
    }

    static async mostRecentfromDogPark(dog_park: DogPark): Promise<DogParkCheckIn | null> {
        const dog_park_id = dog_park.id;
        return await DogParkCheckIn.findFirst<DogParkCheckInInterface, DogParkCheckIn>({ dog_park_id }, 'dogParkCheckIn', ['pet', 'user'], { created_at: 'desc' });
    }

    static async create(user: User, pets: Pet[], dog_park: DogPark): Promise<DogParkCheckIn[]> {
        const user_datails = Prisma.validator<Prisma.UserWhereInput>()({
            id: user.id
        });

        const dog_park_details = Prisma.validator<Prisma.DogParkWhereInput>()({
            id: dog_park.id
        });

        // in case of user checiking in multiple pets
        const pets_details = pets.map(pet =>
            Prisma.validator<Prisma.PetWhereInput>()({
                id: pet.id
            })
        );

        const validated_payload = pets_details.map(pet_item =>
            Prisma.validator<Prisma.DogParkCheckInCreateInput>()({
                active: true,
                user: {
                    connect: user_datails
                },
                pet: {
                    connect: pet_item
                },
                dog_park: {
                    connect: dog_park_details
                }
            })
        );

        const new_check_ins = await Promise.all(validated_payload.map(async payload => PrismaClientModel.prisma.dogParkCheckIn.create({ data: { ...payload } })));
        const check_ins = new_check_ins.map(check_in => DogParkCheckIn.fromProperties(check_in));

        return check_ins;
    }

    userOwnsCheckIn(user: User): boolean {
        return user.id === this.properties.user_id;
    }

    setUser(): void {
        if (this.user) return;
        if (!this.properties.user) throw new Error("Check-in doesn't have a user property");

        this.user = User.fromProperties(this.properties.user);
    }

    isActive(): boolean {
        return this.properties.active;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'DogParkCheckIn';
        this.uncap_model_name = 'dogParkCheckIn';
    }
}

export default DogParkCheckIn;
