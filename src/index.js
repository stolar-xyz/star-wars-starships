import { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <StrictMode>
    <ApolloProvider>
      <GlobalStyle />
      <Normalize />
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
