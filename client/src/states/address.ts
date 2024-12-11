import { BaseState } from './base';
import { DogParkState } from './dog-park';

export interface AddressState extends BaseState {
    full_address: string;
    address: string;
    address2: string | null;
    city: string;
    district: string; // state, province, prefecture etc...
    postal_code: string;
    country: string;

    latitude: number | null;
    longitude: number | null;

    dog_parks?: DogParkState[];
}
