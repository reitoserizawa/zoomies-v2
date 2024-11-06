import styled from 'styled-components';

interface FlexContainerProps {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
}

interface ImgContainerProps {
    size?: string;
}

export const FullScreenContainer = styled.div`
    height: 100vh;
    width: auto;

    padding: 10px;
`;

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
    gap: ${({ gap }) => (gap ? gap : '0em')};
`;

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: ${({ size }) => (size ? size : '100px')};
        width: auto;
    }
`;
