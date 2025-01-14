import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { FlexContainer, ImgContainer, RoundImgContainer } from '../ui/container.styles';
import { NavBarContainer, NavBarLink } from '../ui/navbar.styles';
import { H1, P } from '../ui/text-tags.styles';

import { blankProfileImg, dogPawWithWhiteImg } from '../images';
import HomeIcon from '../images/icons/HomeIcon';
import DogParkIcon from '../images/icons/DogParkicon';

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        window.localStorage.removeItem('token');

        navigate('/login');
    }, [navigate]);

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
                        <P size={1.2} fontWeight={600}>
                            Home
                        </P>
                    </NavBarLink>
                    <NavBarLink to='/parks' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <DogParkIcon size='30px' />
                        <P size={1.2} fontWeight={600}>
                            Dog Park
                        </P>
                    </NavBarLink>
                </FlexContainer>
                <FlexContainer $flexDirection='row' $justifyContent='flex-end' style={{ flexBasis: '33.33%' }}>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-end' $gap={5} style={{ cursor: 'pointer' }} onClick={handleLogout}>
                        <RoundImgContainer>
                            <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                        </RoundImgContainer>
                        <P $marginLeft={5} $marginRight={5}>
                            Logout
                        </P>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </NavBarContainer>
    );
};

export default NavBar;
