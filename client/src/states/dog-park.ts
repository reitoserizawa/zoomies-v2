import { BaseState } from './base';
import { CheckInState } from './check-in';

export interface DogParkState extends BaseState {
    name: string;

    address: string;

    type: string | null;

    geo: number[] | null;

    check_ins?: CheckInState[];
}
