import { createGlobalStyle } from 'styled-components';
import starsBackground from './App/assets/stars.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', sans-serif;
    background: #000000 url(${starsBackground}) fixed;
  }
`;
