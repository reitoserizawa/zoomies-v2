import { ErrorState } from './error';

export interface BaseState {
    id?: string;

    error?: ErrorState;
}

export interface BaseInterface {
    id: string;
}
