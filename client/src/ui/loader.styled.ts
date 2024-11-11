import styled, { keyframes } from 'styled-components';

export const bouncingAnimationm = keyframes`
0%, 100% {
transform: translateY(30px);
}
50% {
transform: translateY(-30px);
}
`;

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin: 0;
`;

export const LoaderDotsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 50px);
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const LoaderDot = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: ${bouncingAnimationm} 1.5s ease-in-out infinite;
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
