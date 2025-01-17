import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 60px;
    background: #f7f7f7;

    padding: 5px 20px;

    -webkit-backface-visibility: hidden;

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        padding: 5px 10px;
    }
`;

export const NavBarIconContainer = styled.div`
    width: 150px;
    background: #f7f7f7;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavBarLink = styled(NavLink)`
    height: 100%;
    width: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    &.active {
        padding-top: 3px;
        border-bottom: 3px solid black;
    }

    @media (max-width: 1000px) {
        width: 50px;
        margin: auto;

        &.active {
            padding: 0px;
            border-bottom: none;
        }
    }

    @media (max-width: 600px), (max-height: 480px) and (max-width: 960px) and (orientation: landscape) {
        width: 50px;
        margin: auto;
    }
`;

export const HamburgerMenuButton = styled.button<{ open: boolean }>`
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: black;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        &:first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

export const MobileSideNav = styled.div<{ open: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #dfe0e2;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 576px) {
        width: 100%;
    }
`;
