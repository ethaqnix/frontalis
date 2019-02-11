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
        title: 'Test',
        header: (props) => {
          console.log(props);
          return <AppBar leftComponent={<Menu />} {...props} />;
        },
      }),
    },
  }, {
    initialRouteName: 'Home',
  },
);

export default TabBarNavigation;
