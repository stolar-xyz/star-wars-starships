import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import starsBackground from '../App/assets/stars.jpg';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
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
