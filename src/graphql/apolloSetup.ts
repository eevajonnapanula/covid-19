import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const cache = new InMemoryCache();

const restLink = new RestLink({
  uri:
    'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData/v2',
});

const client = new ApolloClient({
  link: restLink,
  cache,
});

export default client;
