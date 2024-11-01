import { Router } from 'express';
import { createPet } from './create-pet';

const petRoutes = Router();

petRoutes.post('/', createPet);

export default petRoutes;
