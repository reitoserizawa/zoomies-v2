import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { CheckInInterface, CheckInModelInterface } from '../interfaces/check-in';
import User from './user';
import Pet from './pet';
import DogPark from './dog-park';
import PrismaClientModel from './prisma-client';

class CheckIn extends BaseModel<CheckInInterface, 'CheckIn'> implements CheckInModelInterface {
    public_properties = ['active', 'checked_in_at', 'checked_out_at', 'dog_park', 'dog_park_id', 'pet', 'pet_id', 'user', 'user_id'];
    updatable_properties = ['pet', 'dog_park', 'active', 'checked_in_at', 'checked_out_at'];

    static model_name: Prisma.ModelName = 'CheckIn';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'checkIn';

    static override async fromId(id: number): Promise<CheckIn> {
        const check_in = new CheckIn(id);
        await check_in.fetch();

        return check_in;
    }

    static override fromProperties(properties: CheckInInterface): CheckIn {
        const check_in = new CheckIn(properties.id);
        check_in.setProperties(properties);

        return check_in;
    }

    static async create(user: User, pet: Pet, dog_park: DogPark): Promise<CheckIn> {
        const user_datails = Prisma.validator<Prisma.UserWhereInput>()({
            id: user.id
        });

        const pet_details = Prisma.validator<Prisma.PetWhereInput>()({
            id: pet.id
        });

        const dog_park_details = Prisma.validator<Prisma.DogParkWhereInput>()({
            id: dog_park.id
        });

        const validated_payload = Prisma.validator<Prisma.CheckInCreateInput>()({
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
        });

        const new_check_in = await PrismaClientModel.prisma.checkIn.create({ data: { ...validated_payload } });
        const check_in = CheckIn.fromProperties(new_check_in);

        return check_in;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'CheckIn';
        this.uncap_model_name = 'checkIn';
    }
}

export default CheckIn;
