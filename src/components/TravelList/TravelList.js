import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TravelCard from './TravelCard';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});


const GET_LOCATIONS = gql`
  query travels {
    travels {
      id
    }
  }
`;

class TravelList extends React.PureComponent {
  render() {
    const { travels } = this.props;
    return (
      <Query query={GET_LOCATIONS} variables={{}}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;
          return (
            <View>
              {
                travels.map((travel, i) => (
                  <TravelCard key={`travel_${i}`} travel={travel} />
                ))
              }
            </View>
          );
        }}
      </Query>
    );
  }
}

TravelList.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

TravelList.defaultProps = {
  travels: [],
};

export default TravelList;
