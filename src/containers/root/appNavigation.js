import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../login';
import App from '../tabNavigation'
import React from 'react';
import {
  View,
  Text
} from 'react-native';

const AppNavigator = createSwitchNavigator({
  Login : {
    screen: Login
  },
  App,
});

export default createAppContainer(AppNavigator);