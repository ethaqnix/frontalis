import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class AnimFromleft extends React.Component {
  constructor(props) {
    super(props);
    this.x_translate = new Animated.Value(props.open ? 1 : 0);
    this.state = {
      open: false,
      update: false,
    };
    this.hideMenu();
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
    this.x_translate.setValue(0);
    Animated.spring(
      this.x_translate,
      {
        toValue: 0,
        friction: 10,
      },
    ).start();
  }

  hideMenu() {
    this.x_translate.setValue(1);
    Animated.spring(
      this.x_translate,
      {
        toValue: 1,
        friction: 10,
      },
    ).start();
  }

  render() {
    const { open, update } = this.state;
    const { style, children, outputRange } = this.props;

    const menuMovex = this.x_translate.interpolate({
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
      <Animated.View
        style={[
          style,
          {
            transform: [
              {
                translateX: menuMovex,
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

AnimFromleft.propTypes = {
  style: PropTypes.shape(),
  children: PropTypes.node,
  outputRange: PropTypes.number,
  open: PropTypes.bool,
};

AnimFromleft.defaultProps = {
  style: {
    position: 'absolute',
  },
  children: null,
  outputRange: -300,
  open: true,
};

export default AnimFromleft;
