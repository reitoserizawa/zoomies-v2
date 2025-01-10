import { Prisma } from '@prisma/client';

import { UserFavoriteDogParkInterface, UserFavoriteDogParkModelInterface } from '../interfaces/user-favorite-dog-park';

import BaseModel from './base';
import DogPark from './dog-park';
import User from './user';
import PrismaClientModel from './prisma-client';

class UserFavoriteDogPark extends BaseModel<UserFavoriteDogParkInterface, 'UserFavoriteDogPark'> implements UserFavoriteDogParkModelInterface {
    public_properties: (keyof UserFavoriteDogParkInterface)[] = ['id', 'user', 'user_id', 'dog_park', 'dog_park_id'];
    include_properties: (keyof UserFavoriteDogParkInterface)[] = ['dog_park'];
    updatable_properties: (keyof UserFavoriteDogParkInterface)[] = [];

    static model_name: Prisma.ModelName = 'UserFavoriteDogPark';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'userFavoriteDogPark';

    user?: User;
    dog_park?: DogPark;

    static override async fromId(id: number): Promise<UserFavoriteDogPark> {
        const user_favorite_park = new UserFavoriteDogPark(id);
        await user_favorite_park.fetch();

        return user_favorite_park;
    }

    static override fromProperties(properties: UserFavoriteDogParkInterface): UserFavoriteDogPark {
        const user_favorite_park = new UserFavoriteDogPark(properties.id);
        user_favorite_park.setProperties(properties);

        return user_favorite_park;
    }

    static async fromUserAndDogPark(user: User, dog_park: DogPark): Promise<UserFavoriteDogPark> {
        const user_id = user.id;
        const dog_park_id = dog_park.id;

        return await UserFavoriteDogPark.fromQuery<UserFavoriteDogParkInterface, UserFavoriteDogPark>({ user_id_dog_park_id: { user_id, dog_park_id } }, 'userFavoriteDogPark');
    }

    static async fromUser(user: User): Promise<UserFavoriteDogPark[]> {
        const user_id = user.id;

        return await UserFavoriteDogPark.manyFromQuery<UserFavoriteDogParkInterface, UserFavoriteDogPark>({ user_id }, 'userFavoriteDogPark', [['dog_park', 'address']]);
    }

    static async create(user: User, dog_park: DogPark): Promise<UserFavoriteDogPark> {
        const user_info = Prisma.validator<Prisma.UserWhereInput>()({
            id: user.id
        });

        const dog_park_info = Prisma.validator<Prisma.DogParkWhereInput>()({
            id: dog_park.id
        });

        const validated_payload = Prisma.validator<Prisma.UserFavoriteDogParkCreateInput>()({
            user: {
                connect: user_info
            },
            dog_park: {
                connect: dog_park_info
            }
        });

        const new_user_favorite_park = await PrismaClientModel.prisma.userFavoriteDogPark.create({ data: validated_payload });
        const user_favorite_park = UserFavoriteDogPark.fromProperties(new_user_favorite_park);

        return user_favorite_park;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'UserFavoriteDogPark';
        this.uncap_model_name = 'userFavoriteDogPark';
    }

    setDogPark(): void {
        if (this.dog_park || !this.properties?.dog_park) return;

        this.dog_park = this.properties?.dog_park && DogPark.fromProperties(this.properties?.dog_park);
    }

    userOwnsFavoriteDogPark(user: User): boolean {
        return this.properties.user_id === user.id;
    }
}

export default UserFavoriteDogPark;
