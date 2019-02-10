import { createStackNavigator } from 'react-navigation';
import React from 'react';
import Home from './Home';
import AppBar from '../../../components/AppBar';

const TabBarNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Test',
      },
    },
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: props => ({
      ...props,
    }),
    navigationOptions: props => ({
      ...props,
    }),
  },
);

export default TabBarNavigation;
