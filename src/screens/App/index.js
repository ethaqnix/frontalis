import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Home from './Home';
import Tutorial from '../Tutorial';

import { fadeIn } from '../../redux/actions/navigation';
import FadeNavigationWrapper from '../../components/animations/FadeNavigationWrapper';
import Menu from '../../containers/menu';


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
          <Menu navigation={navigation} />
          <AppNavigator navigation={navigation} />
        </FadeNavigationWrapper>
      </View>
    );
  }
}

export default connect(() => ({}))(CustomNavigator);
