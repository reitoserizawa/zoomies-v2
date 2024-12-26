import { BaseState } from './base';
import { DogParkCheckInState } from './dog-park-check-in';
import { PetState } from './pet';
import { UserFavoriteDogParkState } from './user-favorite-dog-park';

export interface UserState extends BaseState {
    email: string;

    username: string;

    first_name: string;
    last_name: string;
    phone?: string;
    avatar_url?: string | null;

    allergies?: string[];

    password?: string;

    pets?: PetState[];
    dog_park_check_ins?: DogParkCheckInState[];
    favorite_dog_parks?: UserFavoriteDogParkState[];
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

export interface UserChangePasswordRequest {
    currentPassword: string;
    newPassword: string;
}
