import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setIsPetFormModalOpen } from '../../redux/reducers/appSlice';

import { FlexContainer } from '../../ui/container.styles';
import { H2 } from '../../ui/heading.styles';
import { Button } from '../../ui/form.styles';

import AddIcon from '../../images/icons/AddIcon';

import PetCard from './PetCard';
import PetForm from './PetForm';

const PetSection: React.FC = () => {
    const dispatch = useAppDispatch();
    const pets = useAppSelector(state => state.user.pets);

    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Pet</H2>
                <Button $width='auto' $margin='0px' onClick={() => dispatch(setIsPetFormModalOpen(true))}>
                    <AddIcon size='24px' color='#fff' />
                </Button>
            </FlexContainer>
            <hr />
            <PetForm />
            {pets && pets.map((pet, idx) => <PetCard key={idx} id={pet.id} name={pet.name} breed={pet.breed} birthday={pet?.birthday} introduction={pet.introduction} />)}
        </>
    );
};

export default PetSection;
