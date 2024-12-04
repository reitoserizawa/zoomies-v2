import { Prisma } from '@prisma/client';

import { UserFavoriteParkInterface, UserFavoriteParkModelInterface } from '../interfaces/user-favorite-park';

import BaseModel from './base';
import DogPark from './dog-park';
import User from './user';
import PrismaClientModel from './prisma-client';

class UserFavoritePark extends BaseModel<UserFavoriteParkInterface, 'UserFavoritePark'> implements UserFavoriteParkModelInterface {
    public_properties = ['user', 'user_id', 'dog_park', 'dog_park_id'];
    updatable_properties = [];

    static model_name: Prisma.ModelName = 'UserFavoritePark';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'userFavoritePark';

    static override async fromId(id: number): Promise<UserFavoritePark> {
        const user_favorite_park = new UserFavoritePark(id);
        await user_favorite_park.fetch();

        return user_favorite_park;
    }

    static override fromProperties(properties: UserFavoriteParkInterface): UserFavoritePark {
        const user_favorite_park = new UserFavoritePark(properties.id);
        user_favorite_park.setProperties(properties);

        return user_favorite_park;
    }

    static async create(user: User, dog_park: DogPark): Promise<UserFavoritePark> {
        const user_info = Prisma.validator<Prisma.UserWhereInput>()({
            id: user.id
        });

        const dog_park_info = Prisma.validator<Prisma.DogParkWhereInput>()({
            id: dog_park.id
        });

        const validated_payload = Prisma.validator<Prisma.UserFavoriteParkCreateInput>()({
            user: {
                connect: user_info
            },
            dog_park: {
                connect: dog_park_info
            }
        });

        const new_user_favorite_park = await PrismaClientModel.prisma.userFavoritePark.create({ data: validated_payload });
        const user_favorite_park = UserFavoritePark.fromProperties(new_user_favorite_park);

        return user_favorite_park;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'UserFavoritePark';
        this.uncap_model_name = 'userFavoritePark';
    }

    userOwnsFavoriteDogPark(user: User, dog_park: DogPark): boolean {
        return this.properties.user_id === user.id && this.properties.dog_park_id === dog_park.id;
    }
}

export default UserFavoritePark;
