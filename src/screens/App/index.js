import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Home from './Home';
import Menu from '../../containers/menu';
import Tutorial from '../Tutorial';

import { fadeIn } from '../../redux/actions/navigation';
import FadeNavigationWrapper from '../../components/animations/FadeNavigationWrapper';


const AppNavigator = createSwitchNavigator({
  Home,
  Tutorial: {
    screen: Tutorial,
  },
});

class CustomNavigator extends React.Component {
  static router = AppNavigator.router;


  componentDidUpdate() {
    const { dispatch } = this.props;
    fadeIn(dispatch, 1000);


    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state
  }

  props: {
    navigation: any,
    dispatch: Function
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FadeNavigationWrapper>
          <AppNavigator navigation={navigation} />
        </FadeNavigationWrapper>
        <Menu navigation={navigation} />
      </View>
    );
  }
}

export default connect(() => ({}))(CustomNavigator);
