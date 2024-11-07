import { BaseState } from './base';
import { DogParkState } from './dog-park';
import { PetState } from './pet';

export interface CheckInState extends BaseState {
    user?: CanvasUserInterface;
    user_id: number;

    pet?: PetState;
    pet_id: number;

    dog_park?: DogParkState;
    dog_park_id: number;

    active: boolean;

    checked_in_at: Date;
    checked_out_at: Date | null;
}
