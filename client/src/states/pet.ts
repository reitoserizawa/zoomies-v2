import { BaseState } from './base';
import { CheckInState } from './check-in';
import { UserState } from './user';

export interface PetState extends BaseState {
    name: string;

    owner?: UserState;
    owner_id: number;

    type: string;
    breed: string;

    birthday: Date | null;

    introduction: string;

    check_ins?: CheckInState[];

    created_at: Date;
}
