import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Card from './components/Card';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 1.5rem;
    width: 90%;
    margin: 3rem auto;
`;

const App = () => (
    <StyledApp>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <GlobalStyle />
    </StyledApp>
);

export default App;
