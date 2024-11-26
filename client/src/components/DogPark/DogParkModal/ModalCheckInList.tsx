import React, { useCallback } from 'react';

import { P } from '../../../ui/text-tags.styles';
import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../../ui/container.styles';

import { blankProfileImg, dogProfileImg } from '../../../images';
import { useAppSelector } from '../../../redux/hooks/hooks';
import DeleteIcon from '../../../images/icons/DeleteIcon';
import { Button } from '../../../ui/form.styles';
import { useDeleteCheckInMutation, useGetActiveCheckInsFromDogParkQuery, useGetDogParkDetailsQuery } from '../../../redux/reducers/protected-api-slice';

const ModalCheckInList: React.FC = () => {
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);

    const { data: dogParkDetails } = useGetDogParkDetailsQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });
    const { data: activeCheckInsFromDogPark } = useGetActiveCheckInsFromDogParkQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    const [deleteCheckIn] = useDeleteCheckInMutation();

    // TODO: error handling
    const handleDeleteCheckIn = useCallback(
        (checkInId?: number) => {
            if (window.confirm(`Are you sure you want to delete the check in at ${dogParkDetails?.name}?`) && checkInId) {
                deleteCheckIn({ checkInId });
            }
        },
        [dogParkDetails, deleteCheckIn]
    );

    if (!activeCheckInsFromDogPark || activeCheckInsFromDogPark.length === 0) {
        return null;
    }

    return (
        <>
            {activeCheckInsFromDogPark.map((checkIn, index) => (
                <BorderlineContainer key={index}>
                    <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                        {/* pet */}
                        <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                            <RoundImgContainer>
                                <img src={dogProfileImg?.src || ''} alt={dogProfileImg?.alt || 'Dog profile'} />
                            </RoundImgContainer>
                            <P>{checkIn?.pet?.name || 'Unknown Name'}</P>
                            <P>{checkIn?.pet?.breed || 'Unknown Breed'}</P>
                        </FlexContainer>

                        {/* user */}
                        <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                            <P
                                style={{
                                    textWrap: 'nowrap'
                                }}
                            >
                                Checked-in by {checkIn?.user?.username || 'Unknown User'}
                            </P>
                            <RoundImgContainer>
                                <img src={blankProfileImg?.src || ''} alt={blankProfileImg?.alt || 'User profile'} />
                            </RoundImgContainer>
                            {checkIn?.user_owns_check_in && (
                                <Button onClick={() => handleDeleteCheckIn(checkIn?.id)} $width='fit-content' $backgroundColor='white' $margin='0px' style={{ paddingLeft: '15px' }}>
                                    <DeleteIcon color='red' />
                                </Button>
                            )}
                        </FlexContainer>
                    </FlexContainer>
                </BorderlineContainer>
            ))}
        </>
    );
};

export default ModalCheckInList;
