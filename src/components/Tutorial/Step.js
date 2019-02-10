import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Title from './Title';
import Image from './Image';
import { Icon as IconType, Img, onTimeout as onTimeoutType } from './types';
import Description from './Description';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 64,
    paddingBottom: 32,
  },
});

export default withNavigation(({ step, navigation }: {
  step: {
    icon: ?IconType,
    img: ?Img,
    title: ?string,
    description: ?string,
    onTimeout: ?onTimeoutType
  },
  navigation: any
}) => {
  if (step.onTimeout) {
    const timeout = setTimeout(step.onTimeout.onTimeout(navigation), step.onTimeout.timeout);
  }
  return (
    <View style={styles.container}>
      {
        step.title && <Title title={step.title} />
      }
      {
        step.img && <Image img={step.img} />
      }
      {
        step.icon && <Image icon={step.icon} />
      }
      {
        step.description && <Description description={step.description} />
      }
    </View>
  );
});
