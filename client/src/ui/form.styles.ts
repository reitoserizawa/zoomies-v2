import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    padding: 8px;

    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        outline: 2px solid #999;
    }
`;

export const LogInForm = styled.form`
    min-width: 320px;
    max-width: 1200px;
`;

export const Button = styled.button`
    margin: 32px 0px;

    height: 33px;
    width: 100%;

    border-radius: 4px;
    border: none;

    background-color: gray;
    color: white;

    cursor: pointer;

    font-size: 1em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
