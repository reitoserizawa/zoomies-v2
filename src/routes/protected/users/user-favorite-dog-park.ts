import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import DogPark from '../../../models/dog-park';
import UserFavoriteDogPark from '../../../models/user-favorite-dog-park';

import { BadRequestError } from '../../../models/errors';

export const addFavoriteDogPark = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { dog_park_id } = req.body;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');

        const user = await User.fromJwtPayload(req);
        const dog_park = await DogPark.fromId(dog_park_id);

        const user_favroite_park = await UserFavoriteDogPark.create(user, dog_park);

        res.json(await user_favroite_park.prepareForCollection());
    } catch (err) {
        next(err);
    }
};

export const deleteFavoriteDogPark = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { favorite_id, dog_park_id } = req.body;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');

        const user = await User.fromJwtPayload(req);
        const dog_park = await DogPark.fromId(dog_park_id);

        const user_favroite_park = await UserFavoriteDogPark.fromId(favorite_id);
        const user_owns_favorite_park = user_favroite_park.userOwnsFavoriteDogPark(user, dog_park);

        if (user_owns_favorite_park) {
            await user_favroite_park.delete();
        } else {
            throw new BadRequestError('Invalid user or dog park ID');
        }

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};
