import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import SelectInput from '../../../components/SelectInput';

const GET_LOCATIONS = gql`
  query locations {
    locations {
      id
      address
    }
  }
`;

const SelectLocation = (props) => {
  const { navigation } = props;
  return (
    <Query query={GET_LOCATIONS} variables={{}}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) {
          return (<Text>error</Text>);
        }
        return (
          <SelectInput
            data={data.locations}
            placeholder="Lieu"
            navigation={navigation}
          />
        );
      }}
    </Query>
  );
};

export default SelectLocation;
