import gql from 'graphql-tag';

/* export const GET_TRAVEL_PHOTO = gql`
  query travel($locations: [String!]!, startAt: String, endAt: String, members: [user!]!) {
    travel(locations: $locations, startAt: $startAt, endAt: $endAt, members: $members) {
      id
      locations
      startAt
      endAt
      members
    }
  }
`; */

const test = gql`
  query travels {
    travels {
      driver {
        name
      }
    }
  }
`;

export const getType = (type) => {
  switch (type) {
    case String: return ': String';
    case Date: return ': String';
    default: return '';
  }
};

export const constructQuery = (collection, params = {}, variables = {}) => {
  const isVariables = Object.keys(variables).length;
  const isParams = Object.keys(params).length;
  return (gql`query ${collection}${isParams ? '(' : ''}${
    Object.keys(params).map(variable => (
      `$${variable}${getType(variables[variable])}`))}${isParams ? ')' : ''} {
    ${collection}(${
      Object.keys({ ...variables, id: String }).map(variable => (
        `${variable}: $${variable}`
      ))}) {${
      Object.keys({ ...variables, id: String }).reduce((acc, variable) => (
        `${acc}
      ${variable}`
      ), '')
    }
    }
  }`);
};

export const constructGqlQuery = (collection, variables) => gql`${constructQuery(collection, variables)}`;
