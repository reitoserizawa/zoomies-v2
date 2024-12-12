import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useAddFavoriteDogParkMutation, useCheckFavoriteDogParkStatusQuery, useDeleteFavoriteDogParkMutation } from '../../../redux/reducers/protected-api-slice';

import { FlexContainer } from '../../../ui/container.styles';

import FavoriteIcon from '../../../images/icons/FavoriteIcon';
import CloseIcon from '../../../images/icons/CloseIco';
import FilledFavoriteIcon from '../../../images/icons/FilledFavoriteIcon';
import SyncIcon from '../../../images/icons/SyncIcon';

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

// const ModalHeaderAnchor = styled.a`
//     cursor: pointer;

//     color: white;

//     height: 100%;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     font-size: 1em;

//     // active

//     padding-top: -3px;
//     border-bottom: 3px solid green;
//     // font-weight: bold;
// `;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const ModalFavoriteButton = styled.button<{ $isSpinning?: boolean; disabled?: boolean }>`
    all: unset;

    cursor: pointer;
    color: white;

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1em;

    ${({ $isSpinning }) =>
        $isSpinning &&
        css`
            svg {
                animation: ${spin} 4s infinite alternate;
            }
        `}

    ${({ disabled }) =>
        disabled &&
        `
            cursor: default;
            opacity: 0.7
        `}
`;

const ModalHeader: React.FC<{ dogParkId?: number; closeDogParkModal: () => void }> = ({ dogParkId, closeDogParkModal }) => {
    const { data, isFetching, error } = useCheckFavoriteDogParkStatusQuery({ dogParkId });
    const [addFavoriteDogPark] = useAddFavoriteDogParkMutation();
    const [deleteFavoriteDogPark] = useDeleteFavoriteDogParkMutation();

    const isSpinning = isFetching && !data;
    const showFilledFavoriteIcon = !isFetching && data?.favoritedDogPark;

    const handleAddOrDeleteFavoriteDogPark = () => {
        if (dogParkId && !data?.favoritedDogPark) {
            addFavoriteDogPark({ dogParkId });
        } else if (data?.favoritedDogPark?.id) {
            deleteFavoriteDogPark({ userFavoriteDogParkId: data?.favoritedDogPark?.id });
        }
    };

    return (
        <ModalHeaderContainer>
            <FlexContainer $flexDirection='row' $gap='30px'>
                <div style={{ flexBasis: '33.33%' }}></div>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    {/* <ModalHeaderAnchor style={{ flexBasis: '50%' }}>Details</ModalHeaderAnchor>
                    <ModalHeaderAnchor style={{ flexBasis: '50%' }}>Check-ins</ModalHeaderAnchor> */}
                </FlexContainer>
                <FlexContainer $flexDirection='row' $gap='30px' style={{ flexBasis: '33.33%' }}>
                    <ModalFavoriteButton style={{ marginLeft: 'auto' }} onClick={handleAddOrDeleteFavoriteDogPark} $isSpinning={isSpinning} disabled={isSpinning || !!error}>
                        {isSpinning ? <SyncIcon color='white' size='1.75em' /> : showFilledFavoriteIcon ? <FilledFavoriteIcon color='pink' size='1.75em' /> : <FavoriteIcon color='white' size='1.75em' />}
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
