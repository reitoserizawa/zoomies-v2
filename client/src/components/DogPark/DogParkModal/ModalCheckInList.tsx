import React from 'react';

import { P } from '../../../ui/text-tags.styles';
import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../../ui/container.styles';

import { blankProfileImg, dogProfileImg } from '../../../images';
import { useAppSelector } from '../../../redux/hooks/hooks';

const ModalCheckInList: React.FC = () => {
    const activeCheckInsFromDogPark = useAppSelector(state => state.dogPark?.active_check_ins);

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
                            <P>Checked-in by {checkIn?.user?.username || 'Unknown User'}</P>
                            <RoundImgContainer>
                                <img src={blankProfileImg?.src || ''} alt={blankProfileImg?.alt || 'User profile'} />
                            </RoundImgContainer>
                        </FlexContainer>
                    </FlexContainer>
                </BorderlineContainer>
            ))}
        </>
    );
};

export default ModalCheckInList;
