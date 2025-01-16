import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { DesktopContainer, DesktopTabletContainer, FlexContainer, ImgContainer, TabletFlexBasisContainer } from '../../ui/container.styles';
import { H1, P } from '../../ui/text-tags.styles';
import { NavBarLink } from '../../ui/navbar.styles';

import { dogPawWithWhiteImg } from '../../images';
import HomeIcon from '../../images/icons/HomeIcon';
import DogParkIcon from '../../images/icons/DogParkicon';
import LogoutIcon from '../../images/icons/LogoutIcon';

const NavBarItemList: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        window.localStorage.removeItem('token');

        navigate('/login');
    }, [navigate]);

    return (
        <>
            <DesktopTabletContainer style={{ flexBasis: '33.33%' }}>
                <DesktopContainer>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-start'>
                        <ImgContainer height='40px'>
                            <img src={dogPawWithWhiteImg.src} alt={dogPawWithWhiteImg.alt} />
                        </ImgContainer>
                        <H1 style={{ margin: '0px' }}>Zoomies</H1>
                    </FlexContainer>
                </DesktopContainer>
            </DesktopTabletContainer>
            <TabletFlexBasisContainer flexBasis={33.33}>
                <FlexContainer $flexDirection='row' $gap={30}>
                    <NavBarLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <HomeIcon size='30px' />
                        <DesktopContainer>
                            <P size={1.2} fontWeight={600}>
                                Home
                            </P>
                        </DesktopContainer>
                    </NavBarLink>
                    <NavBarLink to='/parks' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <DogParkIcon size='30px' />
                        <DesktopContainer>
                            <P size={1.2} fontWeight={600}>
                                Dog Park
                            </P>
                        </DesktopContainer>
                    </NavBarLink>
                </FlexContainer>
            </TabletFlexBasisContainer>
            <TabletFlexBasisContainer flexBasis={33.33}>
                <FlexContainer $flexDirection='row' $justifyContent='flex-end'>
                    <FlexContainer $flexDirection='row' $justifyContent='flex-end' $gap={5} style={{ cursor: 'pointer' }} onClick={handleLogout}>
                        {/* <DisplayContainer>
                            <RoundImgContainer>
                                <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                            </RoundImgContainer>
                        </DisplayContainer> */}
                        <LogoutIcon size='1.5em' />
                        <DesktopTabletContainer>
                            <P $marginLeft={5} $marginRight={5}>
                                Logout
                            </P>
                        </DesktopTabletContainer>
                    </FlexContainer>
                </FlexContainer>
            </TabletFlexBasisContainer>
        </>
    );
};

export default NavBarItemList;
