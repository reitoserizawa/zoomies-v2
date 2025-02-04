import { Prisma } from '@prisma/client';
import { CustomRequest } from 'express';

import { UserInterface, UserModelInterface } from '../interfaces/user';
import { PetInterface } from '../interfaces/pet';
import { DogParkCheckInInterface } from '../interfaces/dog-park-check-in';

import BaseModel from './base';
import PrismaClientModel from './prisma-client';
import Pet from './pet';
import DogParkCheckIn from './dog-park-check-in';

import PasswordUtil from '../utils/password';
import JWTUtil from '../utils/jwt';
import { AuthError, BadRequestError } from './errors';

class User extends BaseModel<UserInterface, 'User'> implements UserModelInterface {
    public_properties: (keyof UserInterface)[] = ['email', 'username', 'pets', 'first_name', 'last_name', 'phone', 'avatar_url', 'allergies', 'dog_park_check_ins', 'favorite_dog_parks'];
    include_properties: (keyof UserInterface)[] = ['pets', 'dog_park_check_ins', 'favorite_dog_parks'];
    updatable_properties: (keyof UserInterface)[] = ['email', 'username', 'first_name', 'last_name', 'phone', 'avatar_url', 'allergies'];

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

    static async fromUsername(username: string): Promise<User | null> {
        return this.findFirst<UserInterface, User>({ username, deleted: false }, 'user', ['pets']);
    }

    static async fromEmail(email: string): Promise<User | null> {
        return this.findFirst<UserInterface, User>({ email, deleted: false }, 'user');
    }

    static async fromJwtPayload(req: CustomRequest): Promise<User> {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new AuthError();
        }

        const decoded = JWTUtil.decode(token);

        if (!decoded.id) {
            throw new BadRequestError('Invalid token');
        }

        const user_id = typeof decoded.id === 'string' ? parseInt(decoded.id) : decoded.id;
        const user = await User.fromId(user_id);

        return user;
    }

    static async create(properties: Prisma.UserCreateInput): Promise<User> {
        const validated_payload = Prisma.validator<Prisma.UserCreateInput>()({
            email: properties.email,

            username: properties.username,

            first_name: properties.first_name,
            last_name: properties.last_name,
            phone: properties.phone,
            avatar_url: properties.avatar_url,

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
            throw new BadRequestError('ID not set');
        }

        const deleted_user = await this.update({ deleted: true });

        return deleted_user;
    }

    async createPet(payload: Prisma.PetCreateInput): Promise<Pet> {
        return await Pet.create(payload, this);
    }

    async login(password: string): Promise<User> {
        if (this.properties.deleted) throw new AuthError('User is already deleted');

        const password_util = new PasswordUtil(password);
        const is_match = await password_util.verify(this.properties.password);

        if (is_match) {
            return this;
        } else {
            throw new AuthError('Password is not correct');
        }
    }

    async changePassword(current_password: string, new_password: string): Promise<User> {
        const current_password_util = new PasswordUtil(current_password);
        const is_match = await current_password_util.verify(this.properties.password);

        if (!is_match) throw new BadRequestError('The current password does not match');

        const new_password_util = new PasswordUtil(new_password);
        const hashed_new_password = await new_password_util.hash();

        this.update({ password: hashed_new_password });

        return this;
    }

    setPets(): void {
        if (this.pets) return;

        this.pets = this.properties.pets?.filter(pet => !pet.deleted).map(pet => Pet.fromProperties(pet));
    }

    ownsPet(pet: Pet): boolean {
        return pet.properties.owner_id === this.id;
    }

    hasDogParkCheckIn(dog_park_check_in: DogParkCheckIn): boolean {
        return dog_park_check_in.properties.user_id === this.id;
    }

    generateToken(): string {
        return JWTUtil.generate({ id: this.id });
    }

    override subObjectsForCollection(): { dog_park_check_ins: BaseModel<DogParkCheckInInterface, 'DogParkCheckIn'>[]; pets: BaseModel<PetInterface, 'Pet'>[] } {
        return {
            dog_park_check_ins: this.properties.dog_park_check_ins ? this.properties.dog_park_check_ins.map(dog_park_check_in => DogParkCheckIn.fromProperties(dog_park_check_in)) : [],
            pets: this.properties.pets ? this.properties.pets.map(pet => Pet.fromProperties(pet)) : []
        };
    }
}

export default User;
