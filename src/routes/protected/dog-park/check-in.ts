import { CustomRequest, NextFunction, Response } from 'express';

import DogPark from '../../../models/dog-park';
import Pet from '../../../models/pet';
import User from '../../../models/user';
import CheckIn from '../../../models/check-in';

export const createCheckIn = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id: dog_park_id } = req.params;
        const { pet_ids } = req.body;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new Error('Invalid dog park ID');
        if (!pet_ids || pet_ids.length === 0 || Array.isArray(pet_ids)) throw new Error('Invalid pet ID');

        const dog_park = await DogPark.fromId(dog_park_id);
        const pets = await Pet.fromIds(pet_ids);
        const user = await User.fromJwtPayload(req);

        const owns_pets = pets.map((pet: Pet) => user.ownsPet(pet));

        if (owns_pets.includes(false)) throw new Error("User doesn't own the pet or pets");

        await CheckIn.create(user, pets, dog_park);

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};

export const getCheckIns = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id: dog_park_id } = req.params;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new Error('Invalid dog park ID');

        const dog_park = await DogPark.fromId(dog_park_id);
        const user = await User.fromJwtPayload(req);

        const user_check_ins = await CheckIn.fromUser(user);
        const user_check_ins_from_dog_park = user_check_ins.filter(check_in => check_in.properties.dog_park_id === dog_park.id);

        res.json(Promise.all(user_check_ins_from_dog_park.map(async check_in => await check_in.prepareForCollection())));
    } catch (err) {
        next(err);
    }
};

export const deleteCheckIn = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { check_in_ids } = req.body;

        if (!check_in_ids || check_in_ids.length === 0 || Array.isArray(check_in_ids)) throw new Error('Invalid pet ID');

        const check_ins = await CheckIn.fromIds(check_in_ids);
        const user = await User.fromJwtPayload(req);

        const has_check_ins = check_ins.map((check_in: CheckIn) => user.hasCheckIn(check_in));

        if (has_check_ins.includes(false)) throw new Error("User doesn't have the check in or check ins");

        await Promise.all(check_ins.map(check_in => check_in.update({ active: false })));

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};
