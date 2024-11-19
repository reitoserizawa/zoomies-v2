import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexContainer, ImgContainer } from '../../ui/container.styles';
import { dogParkExample } from '../../images';
import Map from './Map';
import { H2, P } from '../../ui/text-tags.styles';
import { DogParkState } from '../../states/dog-park';

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
            <FlexContainer $justifyContent='flex-start' $alignItems='flex-start' style={{ height: 'inherit' }}>
                <H2>{name}</H2>
                <P>{address}</P>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='10px' style={{ marginBottom: '10px', marginLeft: '16px' }}>
                    <P $noMargin>0 puppies</P>
                    <P $noMargin>|</P>
                    <P $noMargin>Total 10 puppies today</P>
                </FlexContainer>
            </FlexContainer>
        </>
    );
};

export default DogParkCard;
