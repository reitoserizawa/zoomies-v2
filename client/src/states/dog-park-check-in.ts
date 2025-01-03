import { BaseState } from './base';
import { DogParkState } from './dog-park';
import { PetState } from './pet';
import { UserState } from './user';

export interface DogParkCheckInState extends BaseState {
    user?: UserState;
    user_id?: number;

    pet?: PetState;
    pet_id?: number;

    dog_park?: DogParkState;
    dog_park_id?: number;

    active: boolean;

    checked_in_at: Date;
    checked_out_at?: Date | null;
    user_owns_check_in?: boolean;
}

export interface CreateDogParkCheckInState {
    dogParkId: number;
    petIds: number[];
}
