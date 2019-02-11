import React from 'react';
import { Text, withTheme } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import MenuIcon from '../../../containers/AppBar/menuIcon';
import AppBar from '../../../components/AppBar';

class Home extends React.PureComponent {
  static navigationOptions = {
    headerLeft: <MenuIcon />,
  };

  render() {
    const { theme } = this.props;
    return (
      <View style={theme.Button}>
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
