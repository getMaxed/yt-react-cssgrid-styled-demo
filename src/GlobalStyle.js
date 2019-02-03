import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    background: linear-gradient(to left bottom, #40eeee, #26f4d3, #52f7aa, #87f778, #bdf23d) no-repeat;
    height: 100vh;
    font-family: 'Palatino Linotype'
}    
`;

export default GlobalStyle;
