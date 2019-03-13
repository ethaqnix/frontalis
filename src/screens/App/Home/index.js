import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
import AppBar from '../../../components/AppBar';
import Menu from '../../../containers/AppBar/menuIcon';
import SearchIcon from '../../../containers/AppBar/searchIcon';
import AddTravelNav from './AddTravel';

const TabBarNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navProps => ({
        header: () => (
          <AppBar
            leftComponent={<Menu />}
            title="Home"
            rightComponent={(
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
              >
                <SearchIcon key="search_icon" style={{ padding: 8 }} />
                <FontAwesome
                  key="add_icon"
                  name="plus"
                  size={30}
                  style={{ padding: 8 }}
                  onPress={() => { navProps.navigation.navigate('AddTravel'); }}
                />
              </View>
)}
          />
        ),
      }),
    },
    AddTravel: {
      screen: AddTravelNav,
      navigationOptions: () => ({
        header: null,
      }),
    },
  }, {
    initialRouteName: 'Home',
  },
);

export default TabBarNavigation;
