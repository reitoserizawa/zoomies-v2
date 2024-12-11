import React from 'react';
import styled from 'styled-components';

import { useAddFavoriteDogParkMutation, useCheckFavoriteDogParkStatusQuery } from '../../../redux/reducers/protected-api-slice';

import { FlexContainer } from '../../../ui/container.styles';

import FavoriteIcon from '../../../images/icons/FavoriteIcon';
import CloseIcon from '../../../images/icons/CloseIco';
import FilledFavoriteIcon from '../../../images/icons/FilledFavoriteIcon';

const ModalHeaderContainer = styled.div`
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

const ModalHeaderAnchor = styled.a`
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

const ModalFavoriteButton = styled.button`
    all: unset;

    cursor: pointer;
    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;
`;

const ModalHeader: React.FC<{ dogParkId?: number; closeDogParkModal: () => void }> = ({ dogParkId, closeDogParkModal }) => {
    const { data } = useCheckFavoriteDogParkStatusQuery({ dogParkId });
    const [addFavoriteDogPark] = useAddFavoriteDogParkMutation();

    const handleAddOrDeleteFavoriteDogPark = () => {
        dogParkId && addFavoriteDogPark({ dogParkId });
    };

    if (data) console.log(data);

    return (
        <ModalHeaderContainer>
            <FlexContainer $flexDirection='row' $gap='30px'>
                <div style={{ flexBasis: '33.33%' }}></div>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    <ModalHeaderAnchor style={{ flexBasis: '50%' }}>Details</ModalHeaderAnchor>
                    <ModalHeaderAnchor style={{ flexBasis: '50%' }}>Check-ins</ModalHeaderAnchor>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    <ModalFavoriteButton style={{ marginLeft: 'auto' }} onClick={handleAddOrDeleteFavoriteDogPark}>
                        {data?.favoritedDogPark ? <FilledFavoriteIcon color='pink' size='1.75em' /> : <FavoriteIcon color='white' size='1.75em' />}
                    </ModalFavoriteButton>
                    <ModalFavoriteButton onClick={() => closeDogParkModal()}>
                        <CloseIcon color='white' size='1.75em' />
                    </ModalFavoriteButton>
                </FlexContainer>
            </FlexContainer>
        </ModalHeaderContainer>
    );
};

export default ModalHeader;
