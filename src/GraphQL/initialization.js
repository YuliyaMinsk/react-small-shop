import { ApolloClient, InMemoryCache } from '@apollo/client';

const localGraphQL = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri: localGraphQL,
  cache: new InMemoryCache(),
});

export default client;
