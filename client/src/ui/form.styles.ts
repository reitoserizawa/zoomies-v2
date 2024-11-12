import styled from 'styled-components';

interface InputProps {
    $outlineRed?: boolean;
}

interface ButtonProps {
    $width?: string;
    $opacity?: number;
    $disabled?: boolean;
    $margin?: string;
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
`;

export const Button = styled.button<ButtonProps>`
    margin: ${({ $margin }) => ($margin ? $margin : '32px 0px;')};

    height: 33px;
    width: ${({ $width }) => ($width ? $width : '100%')};

    border-radius: 4px;
    border: none;

    background-color: gray;
    color: white;

    cursor: ${({ $disabled }) => ($disabled ? 'normal' : 'pointer')};
    opacity: ${({ $opacity, $disabled }) => ($opacity ? $opacity : $disabled ? 0.5 : 1.0)};

    font-size: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
