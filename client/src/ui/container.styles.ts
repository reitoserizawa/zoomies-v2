import styled from 'styled-components';

interface FlexContainerProps {
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
}

interface ImgContainerProps {
    height?: string;
    width?: string;
}

export const Container = styled.div`
    min-height: 100vh;
    width: 1200px;
    min-width: 340px;

    padding-top: 60px;

    margin: auto;
`;

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
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : 'column')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'center')};
    gap: ${({ gap }) => (gap ? gap : '0em')};
`;

// img

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;

        border-radius: 5px;

        height: ${({ height }) => (height ? height : '100px')};
        width: ${({ width }) => (width ? width : 'auto')};
    }
`;

export const RoundImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: ${({ height }) => (height ? height : '40px')};
        width: ${({ width }) => (width ? width : '40px')};

        object-fit: cover;
        border-radius: 50%;
    }
`;

// nav

export const NavBarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 60px;
    background: #f7f7f7;

    padding: 5px 20px;
`;

export const NavBarIconContainer = styled.div`
    width: 150px;
    background: #f7f7f7;

    display: flex;
    align-items: center;
    justify-content: center;
`;
