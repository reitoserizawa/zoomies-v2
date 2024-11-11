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
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    z-index: 999999;
    max-width: 100%;
    max-height: 100%;

    background-color: rgba(247, 247, 247, 0.95);
`;

export const FlexContainer = styled.div<FlexContainerProps>`
    width: 100%;

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
