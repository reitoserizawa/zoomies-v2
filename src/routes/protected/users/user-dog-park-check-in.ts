import { CustomRequest, NextFunction, Response } from 'express';

import DogParkCheckIn from '../../../models/dog-park-check-in';
import User from '../../../models/user';
import { BadRequestError, NoAccessError } from '../../../models/errors';

export const deleteDogParkCheckIn = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { check_in_id } = req.body;

        if (!check_in_id || typeof check_in_id !== 'number') throw new BadRequestError('Invalid pet ID');

        const check_in = await DogParkCheckIn.fromId(check_in_id);
        const user = await User.fromJwtPayload(req);

        const has_check_ins = user.hasDogParkCheckIn(check_in);

        if (!has_check_ins) throw new NoAccessError("User doesn't have the check in or check ins");

        await check_in.update({ active: false });

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
};
