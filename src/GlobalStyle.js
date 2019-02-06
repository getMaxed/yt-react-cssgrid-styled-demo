import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

html {
    box-sizing: border-box;
    font-size: 62.5%; /* 10 px */
    }    

body {
    background: linear-gradient(to right top, #1bdaed, #5dccff, #a1b9fb, #cfa6de, #e19ab6) no-repeat fixed;
    font-family: 'Palatino Linotype';
    /* color: #1b1a17; */
    color: #3e3842
}    
`;

export const theme = {
    red: '#FF0000',
    black: '#000000',
    white: '#FFFFFF',
    blue: '#d7e4f5'
};
