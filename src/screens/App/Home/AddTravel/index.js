import { createStackNavigator } from 'react-navigation';
import React from 'react';
import { Icon } from 'react-native-elements';
import AddTravel from './AddTravel';
import AppBar from '../../../../components/AppBar';
import SelectLocation from './SelectLocation';

const TabBarNavigation = createStackNavigator(
  {
    AddTravel: {
      screen: AddTravel,
      navigationOptions: navProps => ({
        header: headerProps => (
          <AppBar
            leftComponent={(
              <Icon
                name="chevron-left"
                onPress={() => {
                  headerProps.navigation.navigate('Home');
                }}
              />
            )}
            title="Ajouter un trajet"
          />
        ),
      }),
    },
    SelectLocation: {
      screen: SelectLocation,
      navigationOptions: navProps => ({
        header: props => (
          <AppBar
            leftComponent={(
              <Icon
                name="chevron-left"
                onPress={() => {
                  navProps.navigation.goBack();
                }}
              />
)}
            title="Sélectionnez un lieu"
          />
        ),
      }),
    },
  }, {
    initialRouteName: 'AddTravel',
  },
);

export default TabBarNavigation;
