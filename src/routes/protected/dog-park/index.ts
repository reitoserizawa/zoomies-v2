import { Router } from 'express';
import { getAllDogParks } from './alll-dog-parks';
import { getDogParkDetails } from './single-dog-park';
import { createCheckIn, deleteCheckIn, getCheckIns } from './check-in';

const dogParkRoutes = Router();

dogParkRoutes.get('/', getAllDogParks);
dogParkRoutes.get('/:id', getDogParkDetails);

dogParkRoutes.post('/:id/check_ins', createCheckIn);
dogParkRoutes.get('/:id/check_ins', getCheckIns);
dogParkRoutes.delete('/:id/check_ins', deleteCheckIn);

export default dogParkRoutes;
