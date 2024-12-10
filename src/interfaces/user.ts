import { BaseInterface, BaseModelInterface } from './base';
import { DogParkCheckInInterface } from './dog-park-check-in';
import { PetInterface } from './pet';

export interface UserInterface extends BaseInterface {
    email: string;
    username: string;
    password: string;

    pets?: PetInterface[];
    dog_park_check_ins?: DogParkCheckInInterface[];

    created_at: Date;

    deleted: boolean;
}

export interface UserModelInterface extends BaseModelInterface<UserInterface> {}
