import { BaseInterface, BaseModelInterface } from './base';
import { DogParkInterface } from './dog-park';
import { UserInterface } from './user';

export interface UserFavoriteParkInterface extends BaseInterface {
    user?: UserInterface;
    user_id: number;

    dog_park?: DogParkInterface;
    dog_park_id: number;

    created_at: Date;
}

export interface UserFavoriteParkModelInterface extends BaseModelInterface<UserFavoriteParkInterface> {}
