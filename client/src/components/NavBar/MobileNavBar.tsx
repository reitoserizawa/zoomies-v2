import React from 'react';

import { FlexContainer, TabletContainer } from '../../ui/container.styles';

import NavBarItemList from './NavBarItemList';
import HamburgerMenu from './HamburgerMenu';
import MobileSideNavBar from './MobileSideNavBar';

const MobileNavBar: React.FC = () => {
    return (
        <TabletContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='center'>
                <HamburgerMenu />
                <NavBarItemList />
            </FlexContainer>
            <MobileSideNavBar />
        </TabletContainer>
    );
};

export default MobileNavBar;
