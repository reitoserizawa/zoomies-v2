import { BaseInterface, BaseModelInterface } from './base';
import { PetInterface } from './pet';

export interface UserInterface extends BaseInterface {
    email: string;
    username: string;
    password: string;
    pets?: PetInterface[];

    created_at: Date;
}

export interface UserCreateInterface extends Omit<UserInterface, 'id' | 'created_at'> {}

export interface UserModelInterface extends BaseModelInterface<UserInterface> {}
