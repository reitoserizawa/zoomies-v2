import { BaseInterface, BaseState } from './base';
import { CheckInState } from './check-in';
import { PetState } from './pet';

export interface UserState extends BaseState {
    email: string;
    username: string;

    pets?: PetState[];
    check_ins?: CheckInState[];

    signedIn: boolean;
    loading: boolean;
}

export interface UserInterface extends BaseInterface {
    email: string;
    username: string;

    pets?: PetState[];
    check_ins?: CheckInState[];
}

export interface UserLogInInterface {
    user: UserInterface;
    token: string;
}
