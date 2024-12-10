import { BaseInterface, BaseModelInterface } from './base';
import { DogParkCheckInInterface } from './dog-park-check-in';

export interface DogParkInterface extends BaseInterface {
    name: string;

    address: string;

    type: string | null;

    geo: BigInteger[];

    check_ins?: DogParkCheckInInterface[];
}

export interface DogParkModelInterface extends BaseModelInterface<DogParkInterface> {}
