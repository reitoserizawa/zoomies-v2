import { BaseInterface, BaseModelInterface } from './base';
import { CheckInInterface } from './check-in';
import { PetInterface } from './pet';

export interface UserInterface extends BaseInterface {
    email: string;
    username: string;
    password: string;

    pets?: PetInterface[];
    check_ins?: CheckInInterface[];

    created_at: Date;

    deleted: boolean;
}

export interface UserModelInterface extends BaseModelInterface<UserInterface> {}
