import { BaseInterface, BaseModelInterface } from './base';
import { UserInterface } from './user';

export interface PetInterface extends BaseInterface {
    name: string;
    owner: UserInterface;
    owner_id: number;
    type: number;
    breed?: string;
    birthday?: Date;

    created_at: Date;
}

export interface PetModelInterface extends BaseModelInterface<PetInterface> {}
