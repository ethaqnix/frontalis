import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import TravelCard from './TravelCard';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

class TravelList extends React.PureComponent {
  render() {
    const { travels } = this.props;
    return (
      <View style={styles.root}>
        {/* <Query query={querry} variables={{ currency: currentCurrency }} /> */}
        {
          travels.map((travel, i) => (
            <TravelCard key={`travel_${i}`} travel={travel} />
          ))
        }
      </View>
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
