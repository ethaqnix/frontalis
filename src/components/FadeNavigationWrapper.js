import React, { PureComponent } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class FadeNavigationWrapper extends PureComponent {
  state: {
    opacity: number
  } = {
    opacity: 1,
  }

  fadeIn = () => {
    const { opacity } = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 1,
      },
    ).start();
  }

  fadeOut = () => {
    const { opacity } = this.state;
    Animated.timing(
      opacity,
      {
        toValue: 0,
      },
    ).start();
  }

  props: {
    children: React.Node
  }

  render() {
    const { children } = this.props;
    const { opacity } = this.state;
    return (
      <View style={[
        styles.container,
        { opacity },
      ]}
      >
        {children}
      </View>
    );
  }
}
