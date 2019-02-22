import React from 'react';
import { withTheme } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Search from '../../../containers/search';
import TravelList from '../../../containers/home';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
class Home extends React.PureComponent {
  render() {
    const { theme, navigation } = this.props;
    return (
      <View style={styles.root}>
        <Search />
        <TravelList />
      </View>
    );
  }
}

Home.propTypes = {
  theme: PropTypes.shape(),
};

Home.defaultProps = {
  theme: undefined,
};


Home.navigationOptions = {
  title: 'Home',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};


export default withTheme(Home);
