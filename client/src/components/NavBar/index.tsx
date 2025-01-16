import React from 'react';

import { DesktopContainer, FlexContainer } from '../../ui/container.styles';
import { NavBarContainer } from '../../ui/navbar.styles';

import NavBarItemList from './NavBarItemList';
import MobileNavBar from './MobileNavBar';

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <DesktopContainer>
                <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='center'>
                    <NavBarItemList />
                </FlexContainer>
            </DesktopContainer>
            <MobileNavBar />
        </NavBarContainer>
    );
};

export default NavBar;
