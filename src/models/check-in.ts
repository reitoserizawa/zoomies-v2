import { Prisma } from '@prisma/client';

import BaseModel from './base';

import { CheckInInterface, CheckInModelInterface } from '../interfaces/check-in';

class CheckIn extends BaseModel<CheckInInterface, 'CheckIn'> implements CheckInModelInterface {
    public_properties = ['active', 'checked_in_at', 'checked_out_at', 'dog_park', 'dog_park_id', 'pet', 'pet_id', 'user', 'user_id'];
    updatable_properties = ['pet', 'dog_park', 'active', 'checked_in_at', 'checked_out_at'];

    static model_name: Prisma.ModelName = 'CheckIn';
    static uncap_model_name: Uncapitalize<Prisma.ModelName> = 'checkIn';

    static override async fromId(id: number): Promise<CheckIn> {
        const check_in = new CheckIn(id);
        await check_in.fetch();

        return check_in;
    }

    static override fromProperties(properties: CheckInInterface): CheckIn {
        const check_in = new CheckIn(properties.id);
        check_in.setProperties(properties);

        return check_in;
    }

    constructor(id: number) {
        super(id);
        this.model_name = 'CheckIn';
        this.uncap_model_name = 'checkIn';
    }
}

export default CheckIn;
