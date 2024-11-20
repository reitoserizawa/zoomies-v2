import React from 'react';

import { P } from '../../../ui/text-tags.styles';
import { BorderlineContainer, FlexContainer, RoundImgContainer } from '../../../ui/container.styles';

import { blankProfileImg, dogProfileImg } from '../../../images';

const ModalCheckInList: React.FC = () => {
    return (
        <BorderlineContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' style={{ padding: '5px 15px' }}>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                    <RoundImgContainer>
                        <img src={dogProfileImg.src} alt={dogProfileImg.alt} />
                    </RoundImgContainer>
                    <P>Tsuki</P>
                    <P>Golden Doodle Mini</P>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                    <P>Owned by Reito</P>
                    <RoundImgContainer>
                        <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                    </RoundImgContainer>
                </FlexContainer>
            </FlexContainer>
        </BorderlineContainer>
    );
};

export default ModalCheckInList;
