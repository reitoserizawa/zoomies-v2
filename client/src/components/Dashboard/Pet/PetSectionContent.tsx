import React from 'react';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { useGetPetsFromUserQuery } from '../../../redux/reducers/protected-api-slice';

import PetCard from './PetCard';
import PetForm from './PetForm';
import Loader from '../../Loader';
import { FlexContainer } from '../../../ui/container.styles';

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
        <FlexContainer $flexDirection='column' $gap='15px' style={{ padding: '16px 16px 16px' }}>
            {isPetFormModalOpen && <PetForm />}
            {pets && pets.length > 0 ? pets?.map((pet, idx) => <PetCard key={idx} id={pet.id} name={pet.name} breed={pet.breed} birthday={pet?.birthday} introduction={pet.introduction} active_check_in={pet.active_check_in} />) : 'Please add a pet'}
        </FlexContainer>
    );
};

export default PetSectionContent;
