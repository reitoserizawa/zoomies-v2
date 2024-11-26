import styled, { keyframes } from 'styled-components';

interface LoaderProps {
    $small?: boolean;
}

const bouncingAnimationm = keyframes`
    0%, 100% {
    transform: translateY(30px);
    }
    50% {
    transform: translateY(-30px);
    }
`;

const smallBouncingAnimationm = keyframes`
    0%, 100% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(-10px);
    }
`;

export const LoaderDotsContainer = styled.div<LoaderProps>`
    display: grid;
    grid-template-columns: ${({ $small }) => ($small ? 'repeat(5, 15px)' : 'repeat(5, 50px);')};
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const LoaderDot = styled.div<LoaderProps>`
    width: ${({ $small }) => ($small ? '20px' : '50px')};
    height: ${({ $small }) => ($small ? '20px' : '50px')};
    border-radius: 50%;
    animation: ${({ $small }) => ($small ? smallBouncingAnimationm : bouncingAnimationm)} 1.5s ease-in-out infinite;
    background-color: #000000;

    &:nth-child(2) {
        animation-delay: -0.2s;
        background-color: #202020;
    }

    &:nth-child(3) {
        animation-delay: -0.4s;
        background-color: #404040;
    }

    &:nth-child(4) {
        animation-delay: -0.6s;
        background-color: #606060;
    }

    &:nth-child(5) {
        animation-delay: -0.8s;
        background-color: #808080;
    }
`;
