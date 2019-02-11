import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
<<<<<<< HEAD
import { View } from 'react-native';
import Home from './Home';
import Menu from '../../components/AppBar/Menu';
=======
import { connect } from 'react-redux';
import Home from './Home';
import Tutorial from '../Tutorial';

import { fadeIn } from '../../redux/actions/navigation';
import FadeNavigationWrapper from '../../components/FadeNavigationWrapper';

>>>>>>> 314b7f9b3726b6314b4fc9cabe4a6e7b08d35378

const AppNavigator = createSwitchNavigator({
  Tutorial: {
    screen: Tutorial,
  },
  Home,
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
      <FadeNavigationWrapper>
        <AppNavigator navigation={navigation} />
      </FadeNavigationWrapper>
    );
  }
}

export default connect(() => ({}))(CustomNavigator);
