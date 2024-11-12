import React from 'react';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { setIsPetFormModalOpen } from '../../redux/reducers/appSlice';

import { FlexContainer } from '../../ui/container.styles';
import { H2 } from '../../ui/heading.styles';
import { Button } from '../../ui/form.styles';

import AddIcon from '../../images/icons/AddIcon';

import PetCard from './PetCard';
import PetForm from './PetForm';

const PetSection: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <FlexContainer flexDirection='row' justifyContent='space-between'>
                <H2>Pet</H2>
                <Button $width='auto' $margin='0px' onClick={() => dispatch(setIsPetFormModalOpen(true))}>
                    <AddIcon size='24px' color='#fff' />
                </Button>
            </FlexContainer>
            <hr />
            <PetForm />
            <PetCard />
        </>
    );
};

export default PetSection;
