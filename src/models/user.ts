import { Prisma } from '@prisma/client';
import { CustomRequest } from 'express';

import { UserInterface, UserModelInterface } from '../interfaces/user';
import { ExtractKeys } from '../interfaces/base';
import { PetInterface } from '../interfaces/pet';
import { CheckInInterface } from '../interfaces/check-in';

import BaseModel from './base';
import PrismaClientModel from './prisma-client';
import Pet from './pet';
import CheckIn from './check-in';

import PasswordUtil from '../utils/password';
import JWTUtil from '../utils/jwt';

class User extends BaseModel<UserInterface, 'User'> implements UserModelInterface {
    public_properties = ['email', 'username', 'pets'];
    include_properties = ['pets', 'checkIns'];
    updatable_properties = ['email', 'username'];

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
        const validated_payload = Prisma.validator<Prisma.UserCreateInput>()({
            username: properties.username,
            email: properties.email,
            password: properties.password
        });

        const password_util = new PasswordUtil(properties.password);
        const hashed_password = await password_util.hash();

        validated_payload.password = hashed_password;

        const new_user = await PrismaClientModel.prisma.user.create({ data: validated_payload });
        const user = User.fromProperties(new_user);

        return user;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'User';
        this.uncap_model_name = 'user';
    }

    override async delete(): Promise<UserInterface> {
        if (!this.id) {
            throw new Error('id not set');
        }

        const deleted_user = await this.update({ deleted: true });

        return deleted_user;
    }

    async createPet(payload: Prisma.PetCreateInput) {
        await Pet.create(payload, this);
    }

    async login(password: string): Promise<User> {
        if (this.properties.deleted) throw new Error('User is already deleted');

        const password_util = new PasswordUtil(password);
        const is_match = await password_util.verify(this.properties.password);

        if (is_match) {
            return this;
        } else {
            throw new Error('Password is not correct');
        }
    }

    async updatePassword(new_password: string): Promise<User> {
        const password_util = new PasswordUtil(new_password);
        const hashed_new_password = await password_util.hash();

        this.update({ password: hashed_new_password });

        return this;
    }

    ownsPet(pet: Pet): boolean {
        return pet.properties.owner_id === this.id;
    }

    hasCheckIn(check_in: CheckIn): boolean {
        return check_in.properties.user_id === this.id;
    }

    generateToken(): string {
        return JWTUtil.generate({ id: this.id });
    }

    override subObjectsForCollection(): { check_ins: BaseModel<CheckInInterface, 'CheckIn'>[]; pets: BaseModel<PetInterface, 'Pet'>[] } {
        return {
            check_ins: this.properties.check_ins ? this.properties.check_ins.map(check_in => CheckIn.fromProperties(check_in)) : [],
            pets: this.properties.pets ? this.properties.pets.map(pet => Pet.fromProperties(pet)) : []
        };
    }
}

export default User;
