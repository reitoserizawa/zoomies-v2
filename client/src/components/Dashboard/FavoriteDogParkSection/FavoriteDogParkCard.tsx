import React from 'react';
import styled from 'styled-components';

import { DogParkState } from '../../../states/dog-park';
import { FlexContainer } from '../../../ui/container.styles';
import { dogParkExample } from '../../../images';
import { H2, P } from '../../../ui/text-tags.styles';

const DogParkCardContainer = styled.div`
    height: 280px; // margin from hr 8px added
    width: auto;

    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;

    overflow: hidden;

    margin: 16px;
`;

const DogParkCardImageContainer = styled.div`
    height: 280px;
    width: 400px;

    img {
        height: 280px;
        width: 400px;

        object-fit: cover;
    }
`;

const DogParkCardContextContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 35px;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: middle;
`;

const FavoriteDogParkCard: React.FC<Partial<DogParkState>> = () => {
    return (
        <DogParkCardContainer>
            <FlexContainer $flexDirection='row'>
                <DogParkCardImageContainer>
                    <img src={dogParkExample.src} alt='' />
                </DogParkCardImageContainer>
                <FlexContainer $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start'>
                    <DogParkCardContextContainer>
                        <span>Dog run type</span>
                        <H2 $margin='16px 0px'>Name</H2>
                        <P $margin='16px 0px'>Notes</P>
                    </DogParkCardContextContainer>
                    <P $margin='35px'>Delete</P>
                </FlexContainer>
            </FlexContainer>
        </DogParkCardContainer>
    );
};

export default FavoriteDogParkCard;
