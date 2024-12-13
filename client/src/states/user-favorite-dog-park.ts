import { BaseState } from './base';
import { DogParkState } from './dog-park';

export interface UserFavoriteDogParkState extends BaseState {
    user_id: number;

    dog_park_id: number;
    dog_park: DogParkState;
}
