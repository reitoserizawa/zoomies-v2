import { BaseInterface, BaseModelInterface } from './base';
import { DogParkInterface } from './dog-park';
import { PetInterface } from './pet';
import { UserInterface } from './user';

export interface DogParkCheckInInterface extends BaseInterface {
    user?: UserInterface;
    user_id: number;

    pet?: PetInterface;
    pet_id: number;

    dog_park?: DogParkInterface;
    dog_park_id: number;

    active: boolean;

    checked_in_at: Date;
    checked_out_at: Date | null;
}

export interface DogParkCheckInModelInterface extends BaseModelInterface<DogParkCheckInInterface> {}
