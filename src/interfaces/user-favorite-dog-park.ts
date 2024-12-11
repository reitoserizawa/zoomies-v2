import { BaseInterface, BaseModelInterface } from './base';
import { DogParkInterface } from './dog-park';
import { UserInterface } from './user';

export interface UserFavoriteDogParkInterface extends BaseInterface {
    user?: UserInterface;
    user_id: number;

    dog_park?: DogParkInterface;
    dog_park_id: number;

    created_at: Date;

    user_id_dog_park_id?: {
        user_id: number;
        dog_park_id: number;
    };
}

export interface UserFavoriteDogParkModelInterface extends BaseModelInterface<UserFavoriteDogParkInterface> {}
