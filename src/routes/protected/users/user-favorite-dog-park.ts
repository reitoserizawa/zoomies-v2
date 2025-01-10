import { CustomRequest, NextFunction, Response } from 'express';

import User from '../../../models/user';
import DogPark from '../../../models/dog-park';
import UserFavoriteDogPark from '../../../models/user-favorite-dog-park';

import { BadRequestError, NotFoundError } from '../../../models/errors';

export const getFavoriteDogParks = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const user = await User.fromJwtPayload(req);
        const favorite_dog_parks = await UserFavoriteDogPark.fromUser(user);

        res.json(
            await Promise.all(
                favorite_dog_parks.map(async favorite_dog_park => {
                    favorite_dog_park.setDogPark();
                    favorite_dog_park.dog_park?.setAddress();

                    return {
                        ...(await favorite_dog_park.prepareForCollection()),
                        dog_park: {
                            ...(await favorite_dog_park.dog_park?.prepareForCollection()),
                            address: await favorite_dog_park.dog_park?.address?.prepareForCollection()
                        }
                    };
                })
            )
        );
    } catch (err) {
        next(err);
    }
};

export const addFavoriteDogPark = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { dog_park_id } = req.body;

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalid dog park ID');

        const user = await User.fromJwtPayload(req);
        const dog_park = await DogPark.fromId(dog_park_id);

        await UserFavoriteDogPark.create(user, dog_park);

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};

export const deleteFavoriteDogPark = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user_favorite_dog_park_id = parseInt(id);

        if (!user_favorite_dog_park_id || typeof user_favorite_dog_park_id !== 'number') throw new BadRequestError('Invalida user favorite dog park ID');

        const user = await User.fromJwtPayload(req);

        const user_favroite_park = await UserFavoriteDogPark.fromId(user_favorite_dog_park_id);
        const user_owns_favorite_park = user_favroite_park.userOwnsFavoriteDogPark(user);

        if (user_owns_favorite_park) {
            await user_favroite_park.delete();
        } else {
            throw new BadRequestError('Invalid user to delete favorite dog park');
        }

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};

export const checkFavoriteDogParkStatus = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const dog_park_id = parseInt(id);

        if (!dog_park_id || typeof dog_park_id !== 'number') throw new BadRequestError('Invalida dog park ID');

        const user = await User.fromJwtPayload(req);
        const dog_park = await DogPark.fromId(dog_park_id);

        try {
            const user_favorite_dog_park = await UserFavoriteDogPark.fromUserAndDogPark(user, dog_park);
            res.json({ favorited_dog_park: await user_favorite_dog_park.prepareForCollection() });
        } catch (err) {
            if (err instanceof NotFoundError) {
                res.json({ favorited_dog_park: null });
            } else {
                console.log(err);
                throw new BadRequestError('Unknown error occured');
            }
        }
    } catch (err) {
        next(err);
    }
};
