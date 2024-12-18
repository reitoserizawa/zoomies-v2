import React, { useCallback } from 'react';

import { P } from '../../ui/text-tags.styles';
import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../ui/container.styles';
import { Button } from '../../ui/form.styles';

import { blankProfileImg, dogProfileImg } from '../../images';
import DeleteIcon from '../../images/icons/DeleteIcon';

import { useDeleteCheckInMutation } from '../../redux/reducers/protected-api-slice';
import { DogParkCheckInState } from '../../states/dog-park-check-in';

const DogParkCheckInList: React.FC<Partial<DogParkCheckInState>> = ({ id, dog_park, pet, user, user_owns_check_in }) => {
    const dogPark = dog_park;

    const [deleteCheckIn] = useDeleteCheckInMutation();

    // TODO: error handling
    const handleDeleteCheckIn = useCallback(
        (checkInId?: number) => {
            if (window.confirm(`Are you sure you want to delete the check in at ${dogPark?.name}?`) && checkInId) {
                deleteCheckIn({ checkInId });
            }
        },
        [dogPark, deleteCheckIn]
    );

    return (
        <BorderlineContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                {/* pet */}
                <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                    <RoundImgContainer>
                        <img src={dogProfileImg?.src || ''} alt={dogProfileImg?.alt || 'Dog profile'} />
                    </RoundImgContainer>
                    <P>{pet?.name || 'Unknown Name'}</P>
                    <P>{pet?.breed || 'Unknown Breed'}</P>
                </FlexContainer>

                {/* user */}
                <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                    <P
                        style={{
                            textWrap: 'nowrap'
                        }}
                    >
                        Checked-in by {user?.username || 'Unknown User'}
                    </P>
                    <RoundImgContainer>
                        <img src={blankProfileImg?.src || ''} alt={blankProfileImg?.alt || 'User profile'} />
                    </RoundImgContainer>
                    {user_owns_check_in && (
                        <Button onClick={() => handleDeleteCheckIn(id)} $width='fit-content' $backgroundColor='white' $margin='0px' style={{ paddingLeft: '15px' }}>
                            <DeleteIcon color='red' />
                        </Button>
                    )}
                </FlexContainer>
            </FlexContainer>
        </BorderlineContainer>
    );
};

export default DogParkCheckInList;
