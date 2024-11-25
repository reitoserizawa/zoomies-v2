import { Router } from 'express';
import { getAllDogParks } from './alll-dog-parks';
import { getDogParkDetails } from './single-dog-park';
import { createCheckIns, deleteCheckIns, getCheckIns } from './check-in';

const dogParkRoutes = Router();

dogParkRoutes.get('/', getAllDogParks);
dogParkRoutes.get('/:id', getDogParkDetails);

dogParkRoutes.post('/:id/check-ins', createCheckIns);
dogParkRoutes.get('/:id/check-ins', getCheckIns);
dogParkRoutes.delete('/:id/check-ins', deleteCheckIns);

export default dogParkRoutes;
