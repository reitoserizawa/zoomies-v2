import { AddressInterface } from './address';
import { BaseInterface, BaseModelInterface } from './base';
import { DogParkCheckInInterface } from './dog-park-check-in';
import { UserFavoriteDogParkInterface } from './user-favorite-dog-park';

export interface DogParkInterface extends BaseInterface {
    name: string;

    address: AddressInterface;
    address_id: number;

    type: string | null;

    geo: BigInteger[];

    check_ins: DogParkCheckInInterface[];

    favorites: UserFavoriteDogParkInterface[];

    tags: string[];
}

export interface DogParkModelInterface extends BaseModelInterface<DogParkInterface> {}
