import React from 'react';

import { P } from '../../../ui/text-tags.styles';
import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../../ui/container.styles';

import { blankProfileImg, dogProfileImg } from '../../../images';
import { CheckInState } from '../../../states/check-in';

const ModalCheckInList: React.FC<{ checkInsFromDogPark: CheckInState[] }> = ({ checkInsFromDogPark }) => {
    return (
        <>
            {checkInsFromDogPark?.map((checkIn, index) => (
                <BorderlineContainer key={index}>
                    <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                        {/* pet */}
                        <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                            <RoundImgContainer>
                                <img src={dogProfileImg.src} alt={dogProfileImg.alt} />
                            </RoundImgContainer>
                            <P>{checkIn?.pet?.name}</P>
                            <P>{checkIn?.pet?.breed}</P>
                        </FlexContainer>

                        {/* user */}
                        <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                            <P>Checked-in by {checkIn?.user?.username}</P>
                            <RoundImgContainer>
                                <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                            </RoundImgContainer>
                        </FlexContainer>
                    </FlexContainer>
                </BorderlineContainer>
            ))}
        </>
    );
};

export default ModalCheckInList;
