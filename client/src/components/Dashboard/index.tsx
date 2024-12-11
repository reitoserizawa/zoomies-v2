import React from 'react';

import { ContainerWithWidth, FlexContainer } from '../../ui/container.styles';

import ProfileHeader from './ProfileHeader';
import SideBar from './SideBar';
import Pet from './Pet';
import { useAppSelector } from '../../redux/hooks/hooks';
import FavoriteDogParkSection from './FavoriteDogParkSection';

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
                </div>
            </FlexContainer>
        </ContainerWithWidth>
    );
};

export default Dashboard;
