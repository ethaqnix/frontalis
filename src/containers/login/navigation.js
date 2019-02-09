import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './login';
import {
  View,
  Text
} from 'react-native';

const HomeNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: (props) => ({
      header: null,
    })
  },
  Register: {
    screen: () => <View><Text>{"Register"}</Text></View>,
  },
});


export default HomeNavigator;