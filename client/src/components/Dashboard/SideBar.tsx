import React from 'react';

import { FlexContainer, RoundImgContainer } from '../../ui/container.styles';
import { P } from '../../ui/text-tags.styles';

import DogIcon from '../../images/icons/DogIconx';
import RightArrow from '../../images/icons/RightArrow';
import StarIcon from '../../images/icons/StarIcon';
import ClockIcon from '../../images/icons/CloclIcon';
import { blankProfileImg } from '../../images';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { switchDashboardContent } from '../../redux/reducers/appSlice';

const SideBar: React.FC = () => {
    const dashboardContent = useAppSelector(state => state.app.dashboardContent);
    const dispatch = useAppDispatch();

    return (
        <FlexContainer
            $alignItems='left'
            $gap='30px'
            style={{
                flex: '25%',
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
                <FlexContainer $flexDirection='row' style={{ cursor: 'pointer' }} onClick={() => dispatch(switchDashboardContent('pet'))}>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                        <DogIcon size='40px' />
                        <P $noMargin>Pet</P>
                    </FlexContainer>
                    {dashboardContent === 'pet' && <RightArrow />}
                </FlexContainer>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px' style={{ cursor: 'pointer' }} onClick={() => dispatch(switchDashboardContent('favoriteDogPark'))}>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                        <StarIcon size='40px' />
                        <P $noMargin>Favorite Park</P>
                    </FlexContainer>
                    {dashboardContent === 'favoriteDogPark' && <RightArrow />}
                </FlexContainer>
                <FlexContainer $flexDirection='row' style={{ cursor: 'pointer' }} onClick={() => dispatch(switchDashboardContent('recentDogParkCheckIn'))}>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start' $gap='20px'>
                        <ClockIcon size='40px' />
                        <P $noMargin>Recent Check-in</P>
                    </FlexContainer>
                    {dashboardContent === 'recentDogParkCheckIn' && <RightArrow />}
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
};

export default SideBar;
