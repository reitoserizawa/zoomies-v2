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
    updatable_properties = ['pet', 'dog_park', 'active', 'checked_in_at', 'checked_out_at'];

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
        const check_ins = await CheckIn.manyFromQuery<CheckInInterface, 'user_id', CheckIn>({ user_id } as unknown as ExtractKeys<CheckInInterface, 'user_id'>, 'checkIn');

        return check_ins;
    }

    static async create(user: User, pets: Pet[], dog_park: DogPark): Promise<number> {
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

        const validated_payload = pets_details.map(pet_details =>
            Prisma.validator<Prisma.CheckInCreateInput>()({
                active: true,
                user: {
                    connect: user_datails
                },
                pet: {
                    connect: pet_details
                },
                dog_park: {
                    connect: dog_park_details
                }
            })
        );

        const bacth_payload = await PrismaClientModel.prisma.checkIn.createMany({
            data: validated_payload.map(data => {
                return {
                    ...data,
                    user_id: data.user.connect.id,
                    pet_id: data.pet.connect.id,
                    dog_park_id: data.dog_park.connect.id
                };
            }),
            skipDuplicates: true
        });

        return bacth_payload.count;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'CheckIn';
        this.uncap_model_name = 'checkIn';
    }
}

export default CheckIn;
