// @flow
import React from 'react';
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import steps from './steps';
import Step from '../../components/Tutorial/Step';
import { fadeOut } from '../../redux/actions/navigation';
import FadeNavigationWrapper from '../../components/FadeNavigationWrapper';


// const styles = StyleSheet.create({
// });

const mapStateToProps = () => ({

});


export default connect(
  mapStateToProps,
)(withNavigation(({ navigation, dispatch }:{
    navigation: Object,
dispatch: Function
}) => {
  async function onIndexChanged(index) {
    if (index >= steps.length - 1) {
      await fadeOut(dispatch, 3000);
      navigation?.navigate?.('Home', { params: 'test' });
    }
  }
  return (
    <Swiper
      loop={false}
      onIndexChanged={onIndexChanged}
    >
      {
        steps.map((step, i) => (
          <Step
          key={`step-${i}`} // eslint-disable-line
            step={step}
          />
        ))
        }
    </Swiper>
  );
}));
