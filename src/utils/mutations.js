import gql from 'graphql-tag';

export const ADD_USER = gql`
mutation addUser($name: String!) {
  addUser(name: $name) {
    name
  }
}
`;

export const ADD_TRAVEL = gql`
mutation addTravel($driver: String, $locations: [String]!, $members: [String]!, $startAt: String, $endAt: String!) {
  addTravel(driver: $driver, locations: $locations, members: $members, startAt: $startAt, endAt: $endAt) {
    id
    driver {
      id
    }
    locations {
      id
    }
    members {
      id
    }
    startAt
    endAt
  }
}
`;
