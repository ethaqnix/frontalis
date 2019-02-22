import gql from 'graphql-tag';

export const ADD_USER = gql`
mutation addUser($name: String!) {
  addUser(name: $name) {
    name
  }
}
`;

export const ADD_TRAVEL = gql`
mutation AddUser($driver: string, $locations: [string], $members: [string], $startAt: string, $endAt: string) {
  addTodo(driver: $driver, locations: $locations, members: $members, startAt: $startAt, endAt: $endAt) {
    id
    driver
    locations
    members
    startAt
    endAt
  }
}
`;
