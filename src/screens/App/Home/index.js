import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Home from './Home';
import AppBar from '../../../components/AppBar';
import Menu from '../../../containers/AppBar/menuIcon';
import SearchIcon from '../../../containers/AppBar/searchIcon';
import AddTravel from './AddTravel';
import SelectLocation from './SelectLocation';

const TabBarNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: props => (
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
                  onPress={() => { props.navigation.navigate('AddTravel'); }}
                />
              </View>
)}
          />
        ),
      }),
    },
    AddTravel: {
      screen: AddTravel,
      navigationOptions: () => ({
        header: props => (
          <AppBar
            leftComponent={<Icon name="chevron-left" onPress={() => { props.goBack(); }} />}
            title="Ajouter un trajet"
            {...props}
          />
        ),
      }),
    },
    SelectLocation: {
      screen: SelectLocation,
      navigationOptions: () => ({
        header: props => (
          <AppBar
            leftComponent={(
              <Icon
                name="chevron-left"
                onPress={() => {
                  props.navigation.goBack(null);
                }}
              />
)}
            title="Sélectionnez un lieu"
            {...props}
          />
        ),
      }),
    },
  }, {
    initialRouteName: 'AddTravel',
  },
);

export default TabBarNavigation;
