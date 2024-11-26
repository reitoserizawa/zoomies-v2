import React from 'react';

import { useAppDispatch } from '../../redux/hooks/hooks';
import { togglePetCreateFormModal } from '../../redux/reducers/appSlice';

import { FlexContainer } from '../../ui/container.styles';
import { H2 } from '../../ui/text-tags.styles';
import { Button } from '../../ui/form.styles';

import AddIcon from '../../images/icons/AddIcon';

import PetSectionContent from './PetSectionContent';

const PetSection: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <FlexContainer $flexDirection='row' $justifyContent='space-between'>
                <H2>Pet</H2>
                <Button $width='auto' $margin='0px' onClick={() => dispatch(togglePetCreateFormModal(true))}>
                    <AddIcon size='24px' color='#fff' />
                </Button>
            </FlexContainer>
            <hr />
            <PetSectionContent />
        </>
    );
};

export default PetSection;
