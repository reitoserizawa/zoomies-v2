import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../ui/container.styles';
import { dogParkExample } from '../../images';
import { H2, P } from '../../ui/text-tags.styles';
import { DogParkState } from '../../states/dog-park';
import DogIcon from '../../images/icons/DogIconx';
import HistoryIcon from '../../images/icons/HistoryIcon';

const DogParkCardImageContainer = styled.div`
    height: 50%;

    img {
        object-fit: cover;

        height: 100%;
        width: 100%;
    }
`;

const DogParkCard: React.FC<Partial<DogParkState>> = ({ id, name, address, check_ins }) => {
    return (
        <>
            <DogParkCardImageContainer>
                <img src={dogParkExample.src} alt={dogParkExample.alt} />
            </DogParkCardImageContainer>
            <FlexContainer $justifyContent='flex-start' $alignItems='flex-start' style={{ height: '150px' }}>
                <div style={{ flexBasis: '80%' }}>
                    <H2 size='1.2em'>{name}</H2>
                    <P>{address}</P>
                </div>

                <div style={{ flexBasis: '20%' }}>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start' $alignItems='flex-start' $gap='10px' style={{ marginBottom: '10px', marginLeft: '16px' }}>
                        <DogIcon size='16px' />
                        <P $noMargin>0</P>
                        <P $noMargin>|</P>
                        <HistoryIcon size='16px' />
                        <P $noMargin>Last visit: 3min</P>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </>
    );
};

export default DogParkCard;
