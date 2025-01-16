import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { setIsMobileNavOpen } from '../../redux/reducers/appSlice';

import { HamburgerMenuButton } from '../../ui/navbar.styles';

const HamburgerMenu: React.FC = () => {
    const dispatch = useAppDispatch();
    const isMobileNavOpen = useAppSelector(state => state.app.isMobileNavOpen);

    return (
        <HamburgerMenuButton open={isMobileNavOpen} onClick={() => dispatch(setIsMobileNavOpen(!isMobileNavOpen))}>
            <div />
            <div />
            <div />
        </HamburgerMenuButton>
    );
};

export default HamburgerMenu;
