import { BaseState } from './base';
import { CheckInState } from './check-in';
import { UserState } from './user';

export interface PetState extends BaseState {
    name: string;

    owner?: UserState;
    owner_id: number;

    type: string | null;
    breed: string | null;

    birthday: Date | null;

    check_ins?: CheckInState[];

    created_at: Date;
}
