import { Prisma } from '@prisma/client';
import { UserInterface, UserModelInterface } from '../interfaces/user';

import BaseModel from './base';

import PasswordUtil from '../utils/password';
import prisma from '../utils/prisma_client';

class User extends BaseModel<UserInterface, 'User'> implements UserModelInterface {
    public_properties = ['email', 'username'];

    static override fromProperties(properties: UserInterface): User {
        const user = new User(properties.id);
        user.setProperties(properties);

        return user;
    }

    static async create(properties: Prisma.UserCreateInput): Promise<User> {
        const password_util = new PasswordUtil(properties.password);
        const hashed_password = await password_util.hash();

        properties.password = hashed_password;

        const new_user = await prisma.user.create({ data: properties });
        const user = User.fromProperties(new_user);

        return user;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'User';
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
}

export default User;
