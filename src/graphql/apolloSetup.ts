import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import data from '../data.json';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

cache.writeData({ data });

const restLink = new RestLink({
  uri:
    'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData',
});

const typeDefs = gql`
  type Confirmed {
    id: Number
    date: String
    healthCareDistrict: String
    infectionSourceCountry: String
    infectionSource: String
  }
  extend type Query {
    confirmed: Confirmed
  }
`;

const resolvers = {
  Query: {
    confirmed: () => data.confirmed,
  },
};

const client = new ApolloClient({
  link: restLink,
  cache,
  resolvers,
  typeDefs,
});

export default client;
