import { Router } from 'express';
import { getAllDogParks } from './alll-dog-parks';
import { getDogParkDetails } from './single-dog-park';
import { createCheckIns, getActiveCheckIns } from './check-in';

const dogParkRoutes = Router();

dogParkRoutes.get('/', getAllDogParks);
dogParkRoutes.get('/:id', getDogParkDetails);

dogParkRoutes.post('/:id/check-ins', createCheckIns);
dogParkRoutes.get('/:id/active-check-ins', getActiveCheckIns);
// dogParkRoutes.delete('/:id/check-ins', deleteCheckIn);

export default dogParkRoutes;
