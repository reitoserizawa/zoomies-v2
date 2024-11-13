import React from 'react';

import { FlexContainer, RoundImgContainer } from '../../ui/container.styles';
import { H3, H4, P } from '../../ui/heading.styles';
import { Button } from '../../ui/form.styles';

import { dogProfileImg } from '../../images';
import BirthdayCakeIcon from '../../images/icons/BirthdayCakeIcon';

const PetCard: React.FC = () => (
    <FlexContainer style={{ marginTop: '30px', marginBottom: '30px' }}>
        <RoundImgContainer height='150px' width='150px'>
            <img src={dogProfileImg.src} alt={dogProfileImg.alt} />
        </RoundImgContainer>
        <Button $disabled $margin='10px 0px 0px 0px' $opacity={1.0} $width='auto'>
            Golden Doddle Mini
        </Button>
        <H3 size='1.3em' style={{ marginBottom: '0px' }}>
            Tsuki
        </H3>
        <FlexContainer $flexDirection='row'>
            <BirthdayCakeIcon size='1em' />
            <H4>January 26th, 2023</H4>
        </FlexContainer>
        <P $noMargin>Hi, my name is Tsuki. I am a daughter of Davide and Reito. I love running around the dog park and do fetching. Nice to meet you.</P>
    </FlexContainer>
);

export default PetCard;
