import { CustomRequest, NextFunction, Response } from 'express';

import DogPark from '../../../models/dog-park';
import Pet from '../../../models/pet';
import User from '../../../models/user';
import DogParkCheckIn from '../../../models/dog-park-check-in';
import { BadRequestError, NoAccessError } from '../../../models/errors';

export const createDogParkCheckIns = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        const { pet_ids } = req.body;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');
        if (!pet_ids || pet_ids.length === 0) throw new BadRequestError('Invalid pet ID');

        const dog_park = await DogPark.fromId(dog_park_id);
        const pets = await Pet.fromIds(pet_ids);
        const user = await User.fromJwtPayload(req);

        const owns_pets = pets.map((pet: Pet) => user.ownsPet(pet));

        if (owns_pets.includes(false)) throw new NoAccessError("User doesn't own the pet or pets");

        await DogParkCheckIn.create(user, pets, dog_park);

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};

export const getActiveDogParkCheckIns = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');

        const dog_park = await DogPark.fromId(dog_park_id);
        const user = await User.fromJwtPayload(req);

        const dog_park_check_ins = await DogParkCheckIn.fromDogPark(dog_park);
        const active_dog_park_check_ins = dog_park_check_ins.filter(check_in => check_in.isActive());

        const response = await Promise.all(
            active_dog_park_check_ins.map(async check_in => {
                check_in.setUser();
                check_in.setPet();

                return {
                    ...(await check_in.prepareForCollection()),
                    user: await check_in.user?.prepareForCollection(),
                    pet: await check_in.pet?.prepareForCollection(),
                    user_owns_check_in: check_in.userOwnsCheckIn(user)
                };
            })
        );

        res.json(response);
    } catch (err) {
        next(err);
    }
};

export const getPastDogParkCheckIns = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');

        const dog_park = await DogPark.fromId(dog_park_id);

        const dog_park_check_ins = await DogParkCheckIn.fromDogPark(dog_park, 20);
        const past_dog_park_check_ins = dog_park_check_ins.filter(check_in => !check_in.isActive());

        const response = await Promise.all(
            past_dog_park_check_ins.map(async check_in => {
                check_in.setUser();
                check_in.setPet();

                return {
                    ...(await check_in.prepareForCollection()),
                    user: await check_in.user?.prepareForCollection(),
                    pet: await check_in.pet?.prepareForCollection()
                };
            })
        );

        res.json(response);
    } catch (err) {
        next(err);
    }
};

// export const deleteCheckIn = async (req: CustomRequest, res: Response, next: NextFunction) => {
//     try {
//         const { check_in_id } = req.body;

//         if (!check_in_id || typeof check_in_id !== 'number') throw new BadRequestError('Invalid pet ID');

//         const check_in = await CheckIn.fromId(check_in_id);
//         const user = await User.fromJwtPayload(req);

//         const has_check_ins = user.hasCheckIn(check_in);

//         if (!has_check_ins) throw new NoAccessError("User doesn't have the check in or check ins");

//         await check_in.update({ active: false });

//         res.json({ success: true });
//     } catch (err) {
//         next(err);
//     }
// };
