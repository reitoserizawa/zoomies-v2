import { BaseState } from './base';
import { CheckInState } from './check-in';
import { PetState } from './pet';

export interface UserState extends BaseState {
    email: string;
    username: string;

    pets?: PetState[];
    check_ins?: CheckInState[];

    signedIn: boolean;
    loading?: boolean;
}

export interface UserLogInRequest {
    username: string;
    password: string;
}

export interface UserCreateRequest {
    email: string;
    username: string;
    password: string;
}

export interface UserLogInPayload {
    user: UserState;
    token: string;
}