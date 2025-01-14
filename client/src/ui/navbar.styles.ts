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
`;
