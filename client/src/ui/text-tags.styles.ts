import styled from 'styled-components';

interface TextTagProps {
    fontWeight?: number;

    color?: string;
    size?: number;

    $margin?: number;
    $noMargin?: boolean;

    $marginLeft?: number;
    $marginRight?: number;
    $marginTop?: number;
    $marginBottom?: number;
}

export const H1 = styled.h1<TextTagProps>`
    font-size: ${({ size = 2 }) => size}em;
    color: ${({ color = 'black' }) => color};
    margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 16)}px;

    ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop}px;`}
    ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom}px;`}
    ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft}px;`}
    ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight}px;`}

    font-weight: ${({ fontWeight = '700' }) => fontWeight};

    @media only screen and (max-width: 600px) {
        font-size: ${({ size = 1.5 }) => size}em;
        margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 8)}px;

        ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop / 2}px;`}
        ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom / 2}px;`}
        ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft / 2}px;`}
        ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight / 2}px;`}
    }
`;

export const H2 = styled.h2<TextTagProps>`
    font-size: ${({ size = 1.75 }) => size}em;
    color: ${({ color = 'black' }) => color};
    margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 16)}px;

    ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop}px;`}
    ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom}px;`}
    ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft}px;`}
    ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight}px;`}

    font-weight: ${({ fontWeight = '700' }) => fontWeight};

    @media only screen and (max-width: 600px) {
        font-size: ${({ size = 1.3 }) => size}em;
        margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 8)}px;

        ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop / 2}px;`}
        ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom / 2}px;`}
        ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft / 2}px;`}
        ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight / 2}px;`}
    }
`;

export const H3 = styled.h3<TextTagProps>`
    font-size: ${({ size = 1.5 }) => size}em;
    color: ${({ color = 'black' }) => color};
    margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 16)}px;

    ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop}px;`}
    ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom}px;`}
    ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft}px;`}
    ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight}px;`}

    font-weight: ${({ fontWeight = '700' }) => fontWeight};

    @media only screen and (max-width: 600px) {
        font-size: ${({ size = 1.1 }) => size}em;
        margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 8)}px;

        ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop / 2}px;`}
        ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom / 2}px;`}
        ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft / 2}px;`}
        ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight / 2}px;`}
    }
`;

export const H4 = styled.h3<TextTagProps>`
    font-size: ${({ size = 1.25 }) => size}em;
    color: ${({ color = 'black' }) => color};
    margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 16)}px;

    ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop}px;`}
    ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom}px;`}
    ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft}px;`}
    ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight}px;`}

    font-weight: ${({ fontWeight = '700' }) => fontWeight};

    @media only screen and (max-width: 600px) {
        font-size: ${({ size = 1.1 }) => size}em;
        margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 8)}px;

        ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop / 2}px;`}
        ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom / 2}px;`}
        ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft / 2}px;`}
        ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight / 2}px;`}
    }
`;

export const P = styled.p<TextTagProps>`
    font-size: ${({ size = 1 }) => size}em;
    color: ${({ color = 'black' }) => color};
    margin: ${({ $margin, $noMargin }) => ($noMargin ? '0px' : $margin ?? '16px')};

    ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop}px;`}
    ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom}px;`}
    ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft}px;`}
    ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight}px;`}

    @media only screen and (max-width: 600px) {
        font-size: ${({ size = 0.9 }) => size}em;
        margin: ${({ $margin, $noMargin }) => ($noMargin ? 0 : $margin ?? 8)}px;

        ${({ $marginTop }) => $marginTop !== undefined && `margin-top: ${$marginTop / 2}px;`}
        ${({ $marginBottom }) => $marginBottom !== undefined && `margin-bottom: ${$marginBottom / 2}px;`}
        ${({ $marginLeft }) => $marginLeft !== undefined && `margin-left: ${$marginLeft / 2}px;`}
        ${({ $marginRight }) => $marginRight !== undefined && `margin-right: ${$marginRight / 2}px;`}
    }
`;
