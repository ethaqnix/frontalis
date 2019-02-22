import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TimePickerAndroid,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default class TimePickerDialog extends Component {
  static propTypes = {
    onTimePicked: PropTypes.func,
    onCancel: PropTypes.func,
  }

  static defaultProps = {
    onTimePicked: () => {},
    onCancel: () => {},
  }

  constructor(props) {
    super(props);
    this.handleTimePicker = this.handleTimePicker.bind(this);
  }

  handleTimePicker({
    action, hour, minute,
  }) {
    const { onTimePicked, onCancel } = this.props;
    if (action !== TimePickerAndroid.dismissedAction) {
      if (onTimePicked) {
        onTimePicked({ hour, minute });
      }
    } else if (onCancel) {
      onCancel();
    }
  }

  open(options: Object) {
    TimePickerAndroid.open(options).then(this.handleTimePicker);
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
