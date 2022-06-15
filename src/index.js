import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './GraphQL/initialization';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
