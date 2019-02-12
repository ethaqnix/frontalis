import React from 'react';
import { Text, withTheme } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class Home extends React.PureComponent {
  render() {
    const { theme } = this.props;
    return (
      <View>
        <Text>{ theme?.test ? 'Accueil' : 'autre' }</Text>
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
