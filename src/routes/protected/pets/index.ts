import { Router } from 'express';
import { createPet } from './all-pet';
import { deletePet, updatePetProfile } from './singe-pet';
import { getUncheckedInPets } from './filtered-pet';

const petRoutes = Router();

petRoutes.post('/', createPet);
petRoutes.get('/unchecked-in', getUncheckedInPets);

petRoutes.post('/:id', updatePetProfile);
petRoutes.delete('/:id', deletePet);

export default petRoutes;
