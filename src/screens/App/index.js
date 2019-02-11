import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { View } from 'react-native';
import Home from './Home';
import Menu from '../../components/AppBar/Menu';

const AppNavigator = createSwitchNavigator({
  Home,
});

const App = () => [
  <Menu />,
  <AppNavigator />,
];

export default App;
