import React from 'react';
import styled from 'styled-components';

//

const StyledFooter = styled.footer`
    grid-column: 1 / 13;
    background-color: #4f6363;
    height: 11rem;
    text-align: center;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    font-size: 2rem;
    color: #85c0fc;

    .text {
        grid-row: 2 / 3;
    }

    .date {
        grid-row: 3 / 4;
    }
`;

const Footer = () => (
    <StyledFooter>
        <p className="text">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="date">&copy; {new Date().getFullYear()}</p>
    </StyledFooter>
);

export default Footer;
