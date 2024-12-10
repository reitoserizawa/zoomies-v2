import { BaseInterface, BaseModelInterface } from './base';
import { DogParkCheckInInterface } from './dog-park-check-in';
import { PetInterface } from './pet';
import { UserFavoriteDogParkInterface } from './user-favorite-dog-park';

export interface UserInterface extends BaseInterface {
    email: string;

    username: string;

    first_name: string;
    last_name: string;
    phone: string | null;
    avatar_url: string | null;

    allergies: string[];

    password: string;

    pets?: PetInterface[];
    dog_park_check_ins?: DogParkCheckInInterface[];
    favorite_dog_parks?: UserFavoriteDogParkInterface[];

    created_at: Date;

    deleted: boolean;
}

export interface UserModelInterface extends BaseModelInterface<UserInterface> {}
