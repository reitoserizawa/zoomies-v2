import { BaseState } from './base';
import { DogParkCheckInState } from './dog-park-check-in';
import { PetState } from './pet';

export interface UserState extends BaseState {
    email: string;
    username: string;

    pets?: PetState[];
    check_ins?: DogParkCheckInState[];

    signedIn: boolean;
    loading?: boolean;
}

export interface UserLogInRequest {
    username: string;
    password: string;
}

export interface UserCreateRequest {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
}

export interface UserLogInPayload {
    user: UserState;
    token: string;
}
