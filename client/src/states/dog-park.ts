import { BaseState } from './base';
import { AddressState } from './address';
import { CheckInState } from './check-in';

export interface DogParkState extends BaseState {
    name: string;

    address: AddressState;

    type: string | null;

    latitude: number | null;
    altitude: number | null;

    check_ins?: CheckInState[];

    active_check_ins?: CheckInState[];
    active_check_ins_count?: number;
}
