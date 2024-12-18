import React from 'react';

import { ContainerWithWidth, FlexContainer } from '../../ui/container.styles';

import { useAppSelector } from '../../redux/hooks/hooks';

import ProfileHeader from './ProfileHeader';
import SideBar from './SideBar';
import Pet from './Pet';
import FavoriteDogParkSection from './FavoriteDogPark';
import RecentDogParkCheckInSection from './RecentDogParkCheckIn';

const Dashboard: React.FC = () => {
    const dashboardContent = useAppSelector(state => state.app.dashboardContent);

    return (
        <ContainerWithWidth>
            <ProfileHeader />
            <FlexContainer $flexDirection='row' $justifyContent='center' $alignItems='flex-start'>
                <SideBar />
                <div style={{ maxHeight: '100%', width: '100%', padding: '0px 60px', overflowY: 'auto' }}>
                    {dashboardContent === 'pet' && <Pet />}
                    {dashboardContent === 'favoriteDogPark' && <FavoriteDogParkSection />}
                    {dashboardContent === 'recentDogParkCheckIn' && <RecentDogParkCheckInSection />}
                </div>
            </FlexContainer>
        </ContainerWithWidth>
    );
};

export default Dashboard;
