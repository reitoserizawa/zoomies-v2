import React from 'react';
import styled from 'styled-components';
import { ImgContainer } from '../../ui/container.styles';
import { dogParkExample } from '../../images';

const DogParkCardContainer = styled.div`
    min-height: 250px;
    background-color: red;
`;

const DogParkCard = () => {
    return (
        <DogParkCardContainer>
            <ImgContainer>
                <img src={dogParkExample.src} alt={dogParkExample.alt} />
            </ImgContainer>
        </DogParkCardContainer>
    );
};

export default DogParkCard;
