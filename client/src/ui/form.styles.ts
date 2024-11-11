import styled from 'styled-components';

interface InputProps {
    $outlineRed?: boolean;
}

interface ButtonProps {
    $disabled?: boolean;
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
    margin: 32px 0px;

    height: 33px;
    width: 100%;

    border-radius: 4px;
    border: none;

    background-color: gray;
    color: white;

    cursor: ${({ $disabled }) => ($disabled ? 'normal' : 'pointer')};
    opacity: ${({ $disabled }) => ($disabled ? '0.5' : '1.0')};

    z-index: 100000000;

    font-size: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
