import { BaseState } from './base';
import { AddressState } from './address';
import { DogParkCheckInState } from './dog-park-check-in';

export interface DogParkState extends BaseState {
    name: string;

    address: AddressState;

    type: string | null;
    notes: string | null;

    check_ins?: DogParkCheckInState[];
    active_check_ins_count?: number;
}
