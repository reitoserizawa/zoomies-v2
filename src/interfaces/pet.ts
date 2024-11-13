import { BaseInterface, BaseModelInterface } from './base';
import { CheckInInterface } from './check-in';
import { UserInterface } from './user';

export interface PetInterface extends BaseInterface {
    name: string;

    owner?: UserInterface;
    owner_id: number;

    type: string;
    breed: string;

    birthday: Date | null;

    introduction: string;

    check_ins?: CheckInInterface[];

    created_at: Date;
}

export interface PetModelInterface extends BaseModelInterface<PetInterface> {}
