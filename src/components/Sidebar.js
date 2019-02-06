import React from 'react';
import styled from 'styled-components';

//

const StyledSidebar = styled.aside`
    grid-column: 11 / 13;

    @media (max-width: 460px) {
        display: none;
    }

    h3 {
        font-style: italic;
        margin-bottom: 0.4rem;
        font-size: 1.5rem;
    }
`;

const Sidebar = () => (
    <StyledSidebar>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
        <h3>Lorem ipsum dolor.</h3>
    </StyledSidebar>
);

export default Sidebar;
