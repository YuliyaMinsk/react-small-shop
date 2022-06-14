import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.scss';

const localGraphQL = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: localGraphQL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
