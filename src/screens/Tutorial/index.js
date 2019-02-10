import React from 'react';
import Swiper from 'react-native-swiper';

import steps from './steps';
import Step from '../../components/Tutorial/Step';

// const styles = StyleSheet.create({
// });


export default function Tutorial() {
  return (
    <Swiper
      loop={false}
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
}
