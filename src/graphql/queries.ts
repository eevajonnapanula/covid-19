import gql from 'graphql-tag';

export const GET_DATA = gql`
  query confirmed {
    data @rest(type: "Data", path: "/") {
      confirmed @type(name: "Confirmed") {
        id
        date
        healthCareDistrict
        infectionSourceCountry
        infectionSource
      }
      deaths @type(name: "Deaths") {
        id
        date
      }
      recovered @type(name: "Recovered") {
        id
        date
      }
    }
  }
`;
