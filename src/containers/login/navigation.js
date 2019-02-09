import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  Text,
} from 'react-native';
import Login from './login';

const HomeNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: () => <View><Text>Register</Text></View>,
  },
});


export default HomeNavigator;
