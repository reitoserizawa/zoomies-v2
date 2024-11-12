import styled from 'styled-components';

interface TextTagProps {
    fontWeight?: number;

    color?: string;
    size?: string;

    margin?: string;
    noMargin?: boolean;
}

export const H1 = styled.h1<TextTagProps>`
    font-size: ${({ size }) => (size ? size : '2em')};

    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin, noMargin }) => (margin ? margin : noMargin ? '0px' : '16px')};

    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
`;

export const H2 = styled.h2<TextTagProps>`
    font-size: ${({ size }) => (size ? size : '1.5em')};

    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin, noMargin }) => (margin ? margin : noMargin ? '0px' : '16px')};

    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
`;

export const H3 = styled.h3<TextTagProps>`
    font-size: ${({ size }) => (size ? size : '1em')};

    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin, noMargin }) => (margin ? margin : noMargin ? '0px' : '16px')};

    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
`;

export const H4 = styled.h3<TextTagProps>`
    font-size: ${({ size }) => (size ? size : '1em')};

    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin, noMargin }) => (margin ? margin : noMargin ? '0px' : '16px')};

    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
`;

export const P = styled.p<TextTagProps>`
    font-size: ${({ size }) => (size ? size : '1em')};

    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin, noMargin }) => (margin ? margin : noMargin ? '0px' : '16px')};
`;
