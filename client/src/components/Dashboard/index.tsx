import React from 'react';

import { ContainerWithWidth, DashboardContetContainer, FlexContainer } from '../../ui/container.styles';

import { useAppSelector } from '../../redux/hooks/hooks';

import ProfileHeader from './ProfileHeader';
import SideBar from './SideBar';
import Pet from './Pet';
import FavoriteDogParkSection from './FavoriteDogPark';
import RecentDogParkCheckInSection from './RecentDogParkCheckIn';
import ProfilleSettingsSection from './ProfileSettings';

const Dashboard: React.FC = () => {
    const dashboardContent = useAppSelector(state => state.app.dashboardContent);

    return (
        <ContainerWithWidth>
            <ProfileHeader />
            <FlexContainer $flexDirection='row' $justifyContent='center' $alignItems='flex-start'>
                <SideBar />
                <DashboardContetContainer>
                    {dashboardContent === 'pet' && <Pet />}
                    {dashboardContent === 'favoriteDogPark' && <FavoriteDogParkSection />}
                    {dashboardContent === 'recentDogParkCheckIn' && <RecentDogParkCheckInSection />}
                    {dashboardContent === 'profileSettings' && <ProfilleSettingsSection />}
                </DashboardContetContainer>
            </FlexContainer>
        </ContainerWithWidth>
    );
};

export default Dashboard;
