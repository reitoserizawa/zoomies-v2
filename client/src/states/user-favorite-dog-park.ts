import { BaseState } from './base';

export interface UserFavoriteDogParkState extends BaseState {
    user_id: number;
    dog_park_id: number;
}
