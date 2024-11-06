import React from 'react';
import { FlexContainer, FullScreenContainer, ImgContainer } from '../ui/container.styles';

import { dogPawImg } from '../images';

const LogIn = () => {
    return (
        <FullScreenContainer>
            <ImgContainer size={dogPawImg.size.small}>
                <img src={dogPawImg.src} alt={dogPawImg.alt} />
            </ImgContainer>
            <FlexContainer>Hello</FlexContainer>
        </FullScreenContainer>
    );
};

export default LogIn;
