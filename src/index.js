import { StrictMode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { uri } from './apiDetails';
import ReactDOM from 'react-dom';
import App from './App/App';

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
