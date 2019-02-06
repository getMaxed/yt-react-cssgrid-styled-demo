import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './GlobalStyle';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import AlbumsWrapper from './components/AlbumsWrapper';
import Footer from './components/Footer';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const App = () => (
    <ThemeProvider theme={theme}>
        <StyledApp>
            <Nav />
            <Sidebar />
            <AlbumsWrapper />
            <Footer />
            <GlobalStyle />
        </StyledApp>
    </ThemeProvider>
);

export default App;
