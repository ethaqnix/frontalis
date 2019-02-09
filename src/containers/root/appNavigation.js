import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Login from '../login';
import App from '../tabNavigation';


const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  App,
});

export default createAppContainer(AppNavigator);
