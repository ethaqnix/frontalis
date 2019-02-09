import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation-tabs';

const TabBarNavigation = createBottomTabNavigator(
  {
    Home : () => <View><Text>{"Home"}</Text></View>
  },
  {
    initialRouteName: 'Home',
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);

export default TabBarNavigation;
