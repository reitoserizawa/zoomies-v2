import { BaseState } from './base';
import { DogParkCheckInState } from './dog-park-check-in';
import { UserState } from './user';

export interface PetState extends BaseState {
    name: string;

    owner?: UserState;
    owner_id?: number;

    // *: type Dog is added in the backend for now
    // type: string;
    breed: string;

    birthday: Date | null;

    introduction: string;

    check_ins?: DogParkCheckInState[];

    created_at?: Date;

    active_check_in?: DogParkCheckInState;
}
