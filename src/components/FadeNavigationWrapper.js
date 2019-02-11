import React, { PureComponent } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ navigation }) => ({
  fade: navigation.fade,
});

export default connect(
  mapStateToProps,
)(class FadeNavigationWrapper extends PureComponent {
  state: {
    opacity: number
  } = {
    opacity: new Animated.Value(1),
  }

  componentWillReceiveProps = (nextProps) => {
    const { fade } = this.props;
    if (fade === false && nextProps.fade === true) {
      this.fadeOut();
    } else if (fade === true && nextProps.fade === false) {
      this.fadeIn();
    }
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
    children: React.Node,
    fade: Boolean,
    dispatch: Function
  }

  render() {
    const { children } = this.props;
    const { opacity } = this.state;
    return (
      <Animated.View style={[
        styles.container,
        { opacity },
      ]}
      >
        {children}
      </Animated.View>
    );
  }
});
