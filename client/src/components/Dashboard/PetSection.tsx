import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { togglePetCreateFormModal } from '../../redux/reducers/appSlice';

import { FlexContainer } from '../../ui/container.styles';
import { H2 } from '../../ui/text-tags.styles';
import { Button } from '../../ui/form.styles';

import AddIcon from '../../images/icons/AddIcon';

import PetCard from './PetCard';
import PetForm from './PetForm';
import { useGetPetsFromUserQuery } from '../../redux/reducers/protected-api-slice';

const PetSection: React.FC = () => {
    const dispatch = useAppDispatch();

    const { data: pets } = useGetPetsFromUserQuery(null);
    const isPetFormModalOpen = useAppSelector(state => state.app.isPetCreateFormModalOpen);

    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Pet</H2>
                <Button $width='auto' $margin='0px' onClick={() => dispatch(togglePetCreateFormModal(true))}>
                    <AddIcon size='24px' color='#fff' />
                </Button>
            </FlexContainer>
            <hr />
            {isPetFormModalOpen && <PetForm />}
            {pets && pets.map((pet, idx) => <PetCard key={idx} id={pet.id} name={pet.name} breed={pet.breed} birthday={pet?.birthday} introduction={pet.introduction} />)}
        </>
    );
};

export default PetSection;
