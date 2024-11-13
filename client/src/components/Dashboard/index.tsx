import React from 'react';

import { Container, FlexContainer } from '../../ui/container.styles';

import ProfileHeader from './ProfileHeader';
import SideBar from './SideBar';
import PetSection from './PetSection';

const Dashboard: React.FC = () => (
    <Container>
        <ProfileHeader />
        <FlexContainer $flexDirection='row' $justifyContent='center' $alignItems='center' style={{ maxHeight: 'calc(100vh-120px)' }}>
            <SideBar />
            <div style={{ maxHeight: '100%', width: '100%', padding: '0px 60px', overflowY: 'auto' }}>
                <PetSection />
            </div>
        </FlexContainer>
    </Container>
);

export default Dashboard;
