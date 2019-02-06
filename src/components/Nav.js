import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle';

//

const StyledNav = styled.nav`
    grid-column: 1 / 13;
    margin: 1rem auto;
    font-size: 2.3rem;
    font-weight: 900;
    padding: 1rem;

    @media (max-width: 460px) {
        display: grid;
    }

    a {
        text-decoration: none;
        padding: 0 1rem;
        color: #292828;
        /* color: ${theme.blue}; */
        text-transform: uppercase;
        &:hover {
            border-bottom: 0.3rem solid #af7b8b;
        }
    }
`;

const Nav = () => (
    <StyledNav>
        <a href="# ">Purchase</a>
        <a href="# ">View All</a>
        <a href="# ">Contact</a>
    </StyledNav>
);

export default Nav;
