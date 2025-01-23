import React from 'react';
import styled from 'styled-components';

import { BorderlineContainer, FlexContainer } from '../../../ui/container.styles';
import { dogParkExample } from '../../../images';
import { H3, P } from '../../../ui/text-tags.styles';
import { Button } from '../../../ui/form.styles';

import DeleteIcon from '../../../images/icons/DeleteIcon';

import { useDeleteFavoriteDogParkMutation } from '../../../redux/reducers/protected-api-slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { setDogParkModalId } from '../../../redux/reducers/appSlice';

import { UserFavoriteDogParkState } from '../../../states/user-favorite-dog-park';

import DogParkModal from '../../DogPark/DogParkModal';

const FavoriteDogParkCardContainer = styled.div`
    height: 280px; // margin from hr 8px added
    width: 100%;

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        height: fit-content;
    }
`;

const FavoriteDogParkCardImageContainer = styled.div`
    height: 280px;

    flex-basis: 50%;

    img {
        height: 100%;
        width: 100%;

        object-fit: cover;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        flex-basis: auto;

        width: 100% !important;
    }
`;

const FavoriteDogParkCardContextContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 16px 26px;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: middle;
`;

const FavoriteDogParkCard: React.FC<Partial<UserFavoriteDogParkState>> = ({ id, dog_park }) => {
    const dispatch = useAppDispatch();

    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);

    const dogPark = dog_park;
    const fullAddress = dog_park?.address?.full_address;

    const [deleteFavoriteDogPark] = useDeleteFavoriteDogParkMutation();

    const handleDeleteFavoriteDogPark: React.MouseEventHandler<HTMLButtonElement> = event => {
        event.stopPropagation();

        if (window.confirm(`Are you sure you want to delete this favorite dog park?`) && id) {
            deleteFavoriteDogPark({ userFavoriteDogParkId: id });
        }
    };

    return (
        <BorderlineContainer>
            <FavoriteDogParkCardContainer onClick={() => dispatch(setDogParkModalId(dogPark?.id))} style={{ cursor: 'pointer' }}>
                <FlexContainer $flexDirection='row' $mobileFlexDirection='column'>
                    <FavoriteDogParkCardImageContainer>
                        <img src={dogParkExample.src} alt={dogParkExample.alt} />
                    </FavoriteDogParkCardImageContainer>
                    <FlexContainer $flexDirection='column' $justifyContent='flex-start' $alignItems='flex-start' style={{ flexBasis: '50%' }}>
                        <FlexContainer style={{ flexBasis: '95%' }}>
                            <FavoriteDogParkCardContextContainer>
                                <span>{dogPark?.type}</span>
                                <H3 $marginLeft={0}>{dogPark?.name}</H3>
                                <P $noMargin>{fullAddress}</P>
                            </FavoriteDogParkCardContextContainer>
                        </FlexContainer>
                        <FlexContainer $alignItems='center' style={{ flexBasis: '5%' }}>
                            <Button $width='150px' $margin='16px 22px' $borderRadius='30px' $delete onClick={e => handleDeleteFavoriteDogPark(e)}>
                                <FlexContainer $flexDirection='row' $gap={5}>
                                    Delete <DeleteIcon size='16px' color='white' />
                                </FlexContainer>
                            </Button>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                {dogParkModalId && <DogParkModal />}
            </FavoriteDogParkCardContainer>
        </BorderlineContainer>
    );
};

export default FavoriteDogParkCard;
