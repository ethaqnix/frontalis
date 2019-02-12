import { createStackNavigator } from 'react-navigation';
import React from 'react';
import Home from './Home';
import AppBar from '../../../components/AppBar';
import Menu from '../../../containers/AppBar/menuIcon';

const TabBarNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: props => <AppBar leftComponent={<Menu />} title="Home" {...props} />,
      }),
    },
  }, {
    initialRouteName: 'Home',
  },
);

export default TabBarNavigation;
