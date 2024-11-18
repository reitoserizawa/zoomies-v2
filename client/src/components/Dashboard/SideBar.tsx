import React from 'react';

import { FlexContainer, RoundImgContainer } from '../../ui/container.styles';
import { P } from '../../ui/text-tags.styles';

import DogIcon from '../../images/icons/DogIconx';
import RightArrow from '../../images/icons/RightArrow';
import StarIcon from '../../images/icons/StarIcon';
import ClockIcon from '../../images/icons/CloclIcon';
import { blankProfileImg } from '../../images';

const SideBar: React.FC = () => (
    <FlexContainer
        $alignItems='left'
        $gap='30px'
        style={{
            flex: '20%',
            alignSelf: 'flex-start',
            position: 'sticky',
            top: '120px'
        }}
    >
        <FlexContainer
            $justifyContent='flex-start'
            $gap='30px'
            style={{
                alignSelf: 'flex-start'
            }}
        >
            <FlexContainer $flexDirection='row'>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                    <DogIcon size='40px' />
                    <P $noMargin>Pet</P>
                </FlexContainer>
                <RightArrow />
                {/* pet side bar */}
            </FlexContainer>
            <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                <StarIcon size='40px' />
                <P $noMargin>Favorite Park</P>
            </FlexContainer>
            <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                <ClockIcon size='40px' />
                <P $noMargin>Recent Check-in</P>
            </FlexContainer>
        </FlexContainer>
        <FlexContainer
            $flexDirection='row'
            $justifyContent='flex-start'
            $gap='20px'
            style={{
                flexGrow: 1,
                paddingTop: '30px',
                borderTop: '1px solid black'
            }}
        >
            <RoundImgContainer>
                <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
            </RoundImgContainer>
            <P $noMargin>Profile Setting</P>
        </FlexContainer>
    </FlexContainer>
);

export default SideBar;
