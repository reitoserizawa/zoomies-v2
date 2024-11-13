import React from 'react';

import { FlexContainer, ImgContainer, NavBarContainer, NavBarIconContainer, RoundImgContainer } from '../ui/container.styles';
import { H1 } from '../ui/heading.styles';

import { blankProfileImg, dogPawWithWhiteImg } from '../images';
import HomeIcon from '../images/icons/HomeIcon';
import DogParkIcon from '../images/icons/DogParkicon';

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <FlexContainer $flexDirection='row' $justifyContent='space-between' $alignItems='center'>
                <ImgContainer height='40px'>
                    <img src={dogPawWithWhiteImg.src} alt={dogPawWithWhiteImg.alt} />
                </ImgContainer>
                <H1 style={{ margin: '0px' }}>Zoomies</H1>

                <FlexContainer $flexDirection='row'>
                    <NavBarIconContainer>
                        <HomeIcon size='30px' />
                    </NavBarIconContainer>
                    <NavBarIconContainer>
                        <DogParkIcon size='30px' />
                    </NavBarIconContainer>
                </FlexContainer>
                <RoundImgContainer>
                    <img src={blankProfileImg.src} alt={blankProfileImg.alt} />
                </RoundImgContainer>
            </FlexContainer>
        </NavBarContainer>
    );
};

export default NavBar;
