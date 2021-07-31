import { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import ReactDOM from 'react-dom';
import App from './App/App';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Normalize />
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
