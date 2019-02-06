import React from 'react';
import styled from 'styled-components';

import Album from './Album';

//

/*
|--------------------------------------------------------------------------
| ~> albums wrapper -> grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
|--------------------------------------------------------------------------
*/

const StyledSection = styled.section`
    grid-column: 2 / 11;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-row-gap: 1.5rem;
    justify-items: center;

    @media (max-width: 460px) {
        grid-column: 2 / 13;
    }
`;

const AlbumsWrapper = () => (
    <StyledSection>
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
    </StyledSection>
);

export default AlbumsWrapper;
