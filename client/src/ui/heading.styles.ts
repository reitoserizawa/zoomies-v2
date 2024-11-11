import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 2em;
`;

export const H2 = styled.h2`
    font-size: 1.5em;
`;

export const H3 = styled.h3`
    font-size: 1em;
`;

export const P = styled.p<{ color?: string; margin?: string }>`
    font-size: 1em;
    color: ${({ color }) => (color ? color : 'black')};
    margin: ${({ margin }) => (margin ? margin : '16px')};
`;
