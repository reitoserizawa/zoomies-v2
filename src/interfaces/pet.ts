import { BaseInterface, BaseModelInterface } from './base';
import { DogParkCheckInInterface } from './dog-park-check-in';
import { UserInterface } from './user';

export interface PetInterface extends BaseInterface {
    name: string;

    owner?: UserInterface;
    owner_id: number;

    type: string;
    breed: string | null;

    birthday: Date | null;

    introduction: string | null;

    dog_park_check_ins?: DogParkCheckInInterface[];

    created_at: Date;
}

export interface PetModelInterface extends BaseModelInterface<PetInterface> {}
