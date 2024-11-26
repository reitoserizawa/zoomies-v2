import React from 'react';

import { useAppSelector } from '../../redux/hooks/hooks';
import { useGetPetsFromUserQuery } from '../../redux/reducers/protected-api-slice';

import PetCard from './PetCard';
import PetForm from './PetForm';
import Loader from '../Loader';

const PetSectionContent: React.FC = () => {
    const { data: pets, isFetching: fetchingPets } = useGetPetsFromUserQuery(null);
    const isPetFormModalOpen = useAppSelector(state => state.app.isPetCreateFormModalOpen);

    if (fetchingPets) {
        return (
            <div style={{ height: '350px' }}>
                <Loader />
            </div>
        );
    }

    return (
        <>
            {isPetFormModalOpen && <PetForm />}
            {pets?.map((pet, idx) => (
                <PetCard key={idx} id={pet.id} name={pet.name} breed={pet.breed} birthday={pet?.birthday} introduction={pet.introduction} />
            ))}
        </>
    );
};

export default PetSectionContent;
