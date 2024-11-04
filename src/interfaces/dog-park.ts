import { BaseInterface, BaseModelInterface } from './base';
import { CheckInInterface } from './check-in';

export interface DogParkInterface extends BaseInterface {
    name: string;

    address: string;

    type: string | null;

    check_ins?: CheckInInterface[];
}

export interface DogParkModelInterface extends BaseModelInterface<DogParkInterface> {}
