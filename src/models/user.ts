import { Prisma } from '@prisma/client';
import { CustomRequest } from 'express';

import { UserInterface, UserModelInterface } from '../interfaces/user';
import { ExtractKeys } from '../interfaces/base';

import BaseModel from './base';
import PrismaClientModel from './prisma-client';

import PasswordUtil from '../utils/password';
import JWTUtil from '../utils/jwt';
import Pet from './pet';

class User extends BaseModel<UserInterface, 'User'> implements UserModelInterface {
    public_properties = ['email', 'username', 'pets'];
    include_properties = ['pets'];

    pets?: Pet[];

    static override async fromId(id: number): Promise<User> {
        const user = new User(id);
        await user.fetch();

        return user;
    }

    static override fromProperties(properties: UserInterface): User {
        const user = new User(properties.id);
        user.setProperties(properties);

        return user;
    }

    static async fromUsername(username: string): Promise<User> {
        const user = await User.fromQuery<UserInterface, 'username', User>({ username } as ExtractKeys<UserInterface, 'username'>, 'user');

        return user;
    }

    static async fromJwtPayload(req: CustomRequest): Promise<User> {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error('Token not found');
        }

        const decoded = JWTUtil.decode(token);

        if (!decoded.id) {
            throw new Error('ID not found from token');
        }

        const user_id = typeof decoded.id === 'string' ? parseInt(decoded.id) : decoded.id;
        const user = await User.fromId(user_id);

        return user;
    }

    static async create(properties: Prisma.UserCreateInput): Promise<User> {
        const password_util = new PasswordUtil(properties.password);
        const hashed_password = await password_util.hash();

        properties.password = hashed_password;

        const new_user = await PrismaClientModel.prisma.user.create({ data: properties });
        const user = User.fromProperties(new_user);

        return user;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'User';
        this.uncap_model_name = 'user';
    }

    async login(password: string): Promise<User> {
        const password_util = new PasswordUtil(password);
        const is_match = await password_util.verify(this.properties.password);

        if (is_match) {
            return this;
        } else {
            throw new Error('Password is not correct');
        }
    }

    generateToken(): string {
        return JWTUtil.generate({ id: this.id });
    }

    override subObjectsForCollection(): { pets?: Pet[] } {
        return {
            pets: this.properties.pets && this.properties.pets.map(pet => Pet.fromProperties(pet))
        };
    }
}

export default User;
