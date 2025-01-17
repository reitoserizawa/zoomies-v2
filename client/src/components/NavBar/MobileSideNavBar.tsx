import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FlexContainer, RoundImgContainer } from '../../ui/container.styles';
import { P } from '../../ui/text-tags.styles';
import { MobileSideNav } from '../../ui/navbar.styles';

import DogIcon from '../../images/icons/DogIconx';
import StarIcon from '../../images/icons/StarIcon';
import ClockIcon from '../../images/icons/CloclIcon';
import { blankProfileImg } from '../../images';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { switchDashboardContent } from '../../redux/reducers/appSlice';

const MobileSideNavBar: React.FC = () => {
    const isMobileNavOpen = useAppSelector(state => state.app.isMobileNavOpen);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigateDashboardContent = (content: string) => {
        if (location.pathname !== '/') navigate('/');
        dispatch(switchDashboardContent(content));
    };

    return (
        <MobileSideNav open={isMobileNavOpen}>
            <FlexContainer $justifyContent='center' $alignItems='center' $gap={50} style={{ height: 'fit-content' }}>
                <FlexContainer $flexDirection='row' $gap={20} style={{ cursor: 'pointer' }} onClick={() => handleNavigateDashboardContent('pet')}>
                    <DogIcon size='30px' />
                    <P $noMargin size={1.3}>
                        Pet
                    </P>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $gap={20} style={{ cursor: 'pointer' }} onClick={() => handleNavigateDashboardContent('favoriteDogPark')}>
                    <StarIcon size='30px' />
                    <P $noMargin size={1.3}>
                        Favorite Park
                    </P>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $gap={20} style={{ cursor: 'pointer' }} onClick={() => handleNavigateDashboardContent('recentDogParkCheckIn')}>
                    <ClockIcon size='30px' />
                    <P $noMargin size={1.3}>
                        Recent Check-in
                    </P>
                </FlexContainer>
                <hr style={{ width: '100%' }} />
                <FlexContainer $flexDirection='row' $gap={20} style={{ cursor: 'pointer' }} onClick={() => handleNavigateDashboardContent('profileSettings')}>
                    <RoundImgContainer>
                        <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                    </RoundImgContainer>
                    <P $noMargin size={1.3}>
                        Profile Settings
                    </P>
                </FlexContainer>
            </FlexContainer>
        </MobileSideNav>
    );
};

export default MobileSideNavBar;
