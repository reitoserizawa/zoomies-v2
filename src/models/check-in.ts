import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { CheckInInterface, CheckInModelInterface } from '../interfaces/check-in';
import User from './user';
import Pet from './pet';
import DogPark from './dog-park';
import PrismaClientModel from './prisma-client';
import { ExtractKeys } from '../interfaces/base';

class CheckIn extends BaseModel<CheckInInterface, 'CheckIn'> implements CheckInModelInterface {
    public_properties = ['active', 'checked_in_at', 'checked_out_at', 'dog_park', 'dog_park_id', 'pet', 'pet_id', 'user', 'user_id'];
    include_properties = ['dog_park', 'pet', 'user'];
    updatable_properties = ['pet', 'dog_park', 'active', 'checked_in_at', 'checked_out_at'];

    user?: User;

    static override async fromId(id: number): Promise<CheckIn> {
        const check_in = new CheckIn(id);
        await check_in.fetch();

        return check_in;
    }

    static async fromIds(ids: number[]): Promise<CheckIn[]> {
        const check_ins = ids.map(id => new CheckIn(id));
        await Promise.all(check_ins.map(async check_in => await check_in.fetch()));

        return check_ins;
    }

    static override fromProperties(properties: CheckInInterface): CheckIn {
        const check_in = new CheckIn(properties.id);
        check_in.setProperties(properties);

        return check_in;
    }

    static async fromUser(user: User): Promise<CheckIn[]> {
        const user_id = user.id;
        return await CheckIn.manyFromQuery<CheckInInterface, 'user_id', CheckIn>({ user_id }, 'checkIn');
    }

    static async fromPet(pet: Pet): Promise<CheckIn[]> {
        const pet_id = pet.id;
        return await CheckIn.manyFromQuery<CheckInInterface, 'pet_id', CheckIn>({ pet_id }, 'checkIn');
    }

    static async fromDogPark(dog_park: DogPark): Promise<CheckIn[]> {
        const dog_park_id = dog_park.id;
        return await CheckIn.manyFromQuery<CheckInInterface, 'dog_park_id', CheckIn>({ dog_park_id }, 'checkIn', ['pet', 'user']);
    }

    static async create(user: User, pets: Pet[], dog_park: DogPark): Promise<CheckIn[]> {
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
            Prisma.validator<Prisma.CheckInCreateInput>()({
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

        const new_check_ins = await Promise.all(validated_payload.map(async payload => PrismaClientModel.prisma.checkIn.create({ data: { ...payload } })));
        const check_ins = new_check_ins.map(check_in => CheckIn.fromProperties(check_in));

        return check_ins;
    }

    async userOwnsCheckIn(user: User): Promise<boolean> {
        return user.id === this.user?.id;
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
        this.model_name = 'CheckIn';
        this.uncap_model_name = 'checkIn';
    }
}

export default CheckIn;
