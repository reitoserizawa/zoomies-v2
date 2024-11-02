import { BaseInterface, BaseModelInterface } from './base';
import { PetInterface } from './pet';

export interface UserInterface extends BaseInterface {
    email: string;
    username: string;
    password: string;

    pets?: PetInterface[];

    created_at: Date;

    deleted: boolean;
}

export interface UserModelInterface extends BaseModelInterface<UserInterface> {}
