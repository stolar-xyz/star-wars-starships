import { StrictMode } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Normalize />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
