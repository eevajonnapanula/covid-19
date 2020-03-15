import gql from 'graphql-tag';

export const GET_DATA = gql`
  query confirmed {
    confirmed @client {
      id
      date
      healthCareDistrict
      infectionSourceCountry
      infectionSource
    }
    deaths @client {
      id
      date
    }
    recovered @client {
      id
      date
    }
  }
`;

// @rest(type: "Data", path: "/")
