import React from 'react';

import { FlexContainer, ImgContainer, RoundImgContainer } from '../ui/container.styles';
import { NavBarContainer, NavBarIconContainer, NavBarLink } from '../ui/navbar.styles';
import { H1 } from '../ui/text-tags.styles';

import { blankProfileImg, dogPawWithWhiteImg } from '../images';
import HomeIcon from '../images/icons/HomeIcon';
import DogParkIcon from '../images/icons/DogParkicon';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='center'>
                <FlexContainer $flexDirection='row' $justifyContent='flex-start' style={{ flexBasis: '33.33%' }}>
                    <ImgContainer height='40px'>
                        <img src={dogPawWithWhiteImg.src} alt={dogPawWithWhiteImg.alt} />
                    </ImgContainer>
                    <H1 style={{ margin: '0px' }}>Zoomies</H1>
                </FlexContainer>
                <FlexContainer $flexDirection='row' style={{ flexBasis: '33.33%' }}>
                    <NavBarLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <HomeIcon size='30px' />
                    </NavBarLink>
                    <NavBarLink to='/parks' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <DogParkIcon size='30px' />
                    </NavBarLink>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $justifyContent='flex-end' style={{ flexBasis: '33.33%' }}>
                    <RoundImgContainer>
                        <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                    </RoundImgContainer>
                </FlexContainer>
            </FlexContainer>
        </NavBarContainer>
    );
};

export default NavBar;
