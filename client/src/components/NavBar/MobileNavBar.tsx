import React from 'react';

import { FlexContainer, TabletContainer } from '../../ui/container.styles';

import NavBarItemList from './NavBarItemList';
import HamburgerMenu from './HamburgerMenu';

const MobileNavBar: React.FC = () => {
    return (
        <TabletContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='center'>
                <HamburgerMenu />
                <NavBarItemList />
            </FlexContainer>
        </TabletContainer>
    );
};

export default MobileNavBar;
