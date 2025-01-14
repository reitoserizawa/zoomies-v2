import styled from 'styled-components';

interface FullScreenContainerProps {
    $top?: number;
    $backgroundColor?: string;
}

interface FlexContainerProps {
    $flexDirection?: string;
    $alignItems?: string;
    $justifyContent?: string;
    $gap?: number;
}

interface ImgContainerProps {
    height?: string;
    width?: string;
    $borderRadius?: string;
}

export const ContainerWithWidth = styled.div`
    min-height: 100vh;
    width: 1200px;
    min-width: 340px;

    padding-top: 60px;

    margin: auto;
`;

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;

    margin: auto;
`;

export const FullScreenContainer = styled.div<FullScreenContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: ${({ $top }) => ($top ? $top : 0)}px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;

    max-width: 100%;
    max-height: 100%;

    background-color: ${({ $backgroundColor }) => ($backgroundColor ? $backgroundColor : 'rgba(247, 247, 247, 0.95)')};

    z-index: 10;
`;

export const FlexContainer = styled.div<FlexContainerProps>`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'column')};
    align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
    justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
    gap: ${({ $gap }) => ($gap ? $gap : 0)}px;

    @media only screen and (max-width: 600px) {
        gap: ${({ $gap }) => ($gap ? $gap - 2 : 0)}px;
    }
`;

export const GridContainer = styled.div<FlexContainerProps>`
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 30px;

    @media (max-width: 1800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1300px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const BorderlineContainer = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    border-radius: 5px;
`;

// img

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;

        border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '5px')};

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
