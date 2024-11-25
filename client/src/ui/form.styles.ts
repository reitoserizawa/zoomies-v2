import styled from 'styled-components';

export interface InputProps {
    $outlineRed?: boolean;
}

interface ButtonProps {
    $width?: string;
    $opacity?: number;
    $disabled?: boolean;
    $margin?: string;
    $borderRadius?: string;
    $delete?: boolean;
    $edit?: boolean;
    $backgroundColor?: string;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 8px;

    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        outline: 2px solid ${({ $outlineRed }) => ($outlineRed ? 'red' : '#999')};
    }
`;

export const LogInForm = styled.form`
    min-width: 320px;
    max-width: 1200px;

    p {
        margin: 16px 16px 16px 8px;
    }
`;

export const Button = styled.button<ButtonProps>`
    margin: ${({ $margin }) => ($margin ? $margin : '32px 0px;')};

    height: 33px;
    width: ${({ $width }) => ($width ? $width : '100%')};

    border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '4px')};
    border: none;

    cursor: ${({ $disabled }) => ($disabled ? 'normal' : 'pointer')};
    opacity: ${({ $opacity, $disabled }) => ($opacity ? $opacity : $disabled ? 0.5 : 1.0)};

    font-size: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${({ $backgroundColor }) => ($backgroundColor ? $backgroundColor : 'gray')};
    color: white;

    ${({ $delete }) =>
        $delete &&
        `
        background-color: red;
    `}

    ${({ $edit }) =>
        $edit &&
        `
        background-color: #f0ad4e;
    `}
`;
