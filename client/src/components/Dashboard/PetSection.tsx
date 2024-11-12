import React from 'react';
import { FlexContainer } from '../../ui/container.styles';
import { H2 } from '../../ui/heading.styles';
import { Button } from '../../ui/form.styles';
import AddIcon from '../../images/icons/AddIcon';
import PetCard from './PetCard';

const PetSection: React.FC = () => (
    <>
        <FlexContainer flexDirection='row' justifyContent='space-between'>
            <H2>Pet</H2>
            <Button $width='auto' $margin='0px'>
                <AddIcon size='24px' color='#fff' />
            </Button>
        </FlexContainer>
        <hr />
        <PetCard />
    </>
);

export default PetSection;
