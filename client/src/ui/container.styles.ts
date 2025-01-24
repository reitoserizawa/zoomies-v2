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
    $tabletFlexDirection?: string;
    $mobileFlexDirection?: string;

    $padding?: number;
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

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;

    margin: auto;
`;

export const DashboardContetContainer = styled.div`
    max-height: 100%;
    width: 100%;
    padding: 0px 30px;
    overflow-y: auto;

    @media (max-width: 1000px) {
        padding: 5px 10px;
    }
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

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: inline;
        padding-top: 16px;
        padding-bottom: 16px;
    }
`;

export const FlexContainer = styled.div<FlexContainerProps>`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'column')};
    align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
    justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
    gap: ${({ $gap }) => ($gap ? $gap : 0)}px;

    @media (max-width: 1000px) {
        ${({ $tabletFlexDirection }) =>
            $tabletFlexDirection &&
            `
            flex-direction: ${$tabletFlexDirection};
            `}
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        ${({ $mobileFlexDirection }) =>
            $mobileFlexDirection &&
            `
            flex-direction: ${$mobileFlexDirection};
            `}
        gap: ${({ $gap }) => ($gap ? $gap - 2 : 0)}px;
    }
`;

export const TabletFlexContainer = styled.div<FlexContainerProps>`
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'column')};
        align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
        justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
        gap: ${({ $gap }) => ($gap ? $gap : 0)}px;

        ${({ $padding }) =>
            $padding &&
            `
            padding: ${$padding}px;
        `};
    }
`;

export const MobileFlexContainer = styled.div<FlexContainerProps>`
    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: flex;
        flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'column')};
        align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
        justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'center')};
        gap: ${({ $gap }) => ($gap ? $gap : 0)}px;
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

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const BorderlineContainer = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    border-radius: 5px;
`;

export const DesktopContainer = styled.div<{ $margin?: number }>`
    display: inline;

    @media (max-width: 1000px) {
        display: none;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: none;
    }
`;

export const TabletContainer = styled.div<{ $margin?: number }>`
    display: none;

    @media (max-width: 1000px) {
        display: inline;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: inline;
    }
`;

export const DesktopTabletContainer = styled.div<{ $margin?: number }>`
    display: inline;

    @media (max-width: 1000px) {
        display: inline;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: none;
    }
`;

export const MobileContainer = styled.div<{ $margin?: number }>`
    display: none;

    @media (max-width: 1000px) {
        display: none;
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        display: inline;
        margin: ${({ $margin }) => $margin}px;
    }
`;

export const DesktopFlexBasisContainer = styled.div<{ flexBasis: number }>`
    flex-basis: ${({ flexBasis }) => flexBasis}%;

    @media (max-width: 1000px) {
        flex-basis: auto;
    }
`;

export const TabletFlexBasisContainer = styled.div<{ flexBasis: number }>`
    flex-basis: ${({ flexBasis }) => flexBasis}%;

    @media (max-width: 1000px) {
        flex-basis: ${({ flexBasis }) => flexBasis}%;
    }
`;

// img

export const ImgContainer = styled.div<ImgContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${({ height }) => (height ? height : '100%')};
    width: ${({ width }) => (width ? width : 'auto')};

    img {
        object-fit: cover;

        border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '5px')};

        height: 100%;
        width: 100%;
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
