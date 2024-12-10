import { BaseInterface, BaseModelInterface } from './base';
import { DogParkInterface } from './dog-park';

export interface AddressInterface extends BaseInterface {
    full_address: string;
    address: string;
    address2: string | null;
    district: string; // state, province, prefecture etc...
    city: string;
    postal_code: string;
    country: string;

    latitude: number | null;
    altitude: number | null;

    dog_parks?: DogParkInterface[];
    //   dog_friendly_dining: DogFriendlyDining[]
}

export interface AddressModelInterface extends BaseModelInterface<AddressInterface> {}
