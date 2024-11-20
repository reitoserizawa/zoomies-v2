import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../../../ui/container.styles';

import FavoriteIcon from '../../../images/icons/FavoriteIcon';
import CloseIcon from '../../../images/icons/CloseIco';

const DogParkModalHeaderContainer = styled.div`
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.7);

    overflow-y: scroll;

    height: 60px;
    width: 1000px;

    padding: 5px 30px;

    margin: 0px auto;
`;

const DogParkModalHeaderAnchor = styled.a`
    cursor: pointer;

    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;

    // active

    padding-top: -3px;
    border-bottom: 3px solid green;
    // font-weight: bold;
`;

const DogParkModalFavoriteButton = styled.button`
    all: unset;

    cursor: pointer;
    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
`;

const DogParkModalHeader: React.FC<{ closeDogParkModal: () => void }> = ({ closeDogParkModal }) => {
    return (
        <DogParkModalHeaderContainer>
            <FlexContainer $flexDirection='row' $gap='30px'>
                <div style={{ flexBasis: '33.33%' }}></div>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    <DogParkModalHeaderAnchor style={{ flexBasis: '50%' }}>Details</DogParkModalHeaderAnchor>
                    <DogParkModalHeaderAnchor style={{ flexBasis: '50%' }}>Check-ins</DogParkModalHeaderAnchor>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    <DogParkModalFavoriteButton style={{ marginLeft: 'auto' }}>
                        <FavoriteIcon color='white' size='1.75em' />
                    </DogParkModalFavoriteButton>
                    <DogParkModalFavoriteButton onClick={() => closeDogParkModal()}>
                        <CloseIcon color='white' size='1.75em' />
                    </DogParkModalFavoriteButton>
                </FlexContainer>
            </FlexContainer>
        </DogParkModalHeaderContainer>
    );
};

export default DogParkModalHeader;
