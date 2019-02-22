import React from 'react';
import { Animated } from 'react-native';
import propTypes from 'prop-types';

class AnimFromTop extends React.Component {
  constructor(props) {
    super(props);
    this.y_translate = new Animated.Value(props.open ? 0 : 1);
    this.state = {
      open: false,
      update: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { open } = nextProps;
    const { open: currentOpen } = prevState;
    return {
      open,
      update: open !== currentOpen,
    };
  }


  openMenu() {
    this.y_translate.setValue(0);
    Animated.spring(
      this.y_translate,
      {
        toValue: 0,
        friction: 10,
      },
    ).start();
  }

  hideMenu() {
    this.y_translate.setValue(1);
    Animated.spring(
      this.y_translate,
      {
        toValue: 1,
        friction: 10,
      },
    ).start();
  }

  render() {
    const { open, update } = this.state;
    const { style, children, outputRange } = this.props;

    const menuMoveY = this.y_translate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, outputRange],
    });
    if (update) {
      if (open) {
        this.openMenu();
      } else {
        this.hideMenu();
      }
    }
    return (
      <Animated.View // Special animatable View
        style={[
          style,
          {
            transform: [
              {
                translateY: menuMoveY,
              },
            ],
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  }
}

AnimFromTop.propTypes = {
  style: propTypes.shape(),
  children: propTypes.oneOfType([
    propTypes.element,
    propTypes.arrayOf(propTypes.element),
  ]),
  outputRange: propTypes.number,
  open: propTypes.bool,
};

AnimFromTop.defaultProps = {
  style: {
    position: 'absolute',
  },
  children: null,
  outputRange: -300,
  open: true,
};

export default AnimFromTop;
