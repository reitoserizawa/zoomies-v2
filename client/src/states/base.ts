import { ErrorState } from './error';

export interface BaseState {
    id?: number;

    error?: ErrorState;
}

export interface BaseInterface {
    id: string;
}
