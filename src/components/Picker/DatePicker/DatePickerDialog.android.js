import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  DatePickerAndroid,
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

export default class DatePickerDialog extends Component {
  static propTypes = {
    onDatePicked: PropTypes.func,
    onCancel: PropTypes.func,
  }

  static defaultProps = {
    onDatePicked: () => {},
    onCancel: () => {},
  }

  constructor(props) {
    super(props);
    this.handleDatePicker = this.handleDatePicker.bind(this);
    this.state = {
    };
  }

  /**
   * Opens the standard Android date picker dialog.
   *
   * The available keys for the `options` object are:
   *   * `date` (`Date` object or timestamp in milliseconds) - date to show by default
   *   * `minDate` (`Date` or timestamp in milliseconds) - minimum date that can be selected
   *   * `maxDate` (`Date` object or timestamp in milliseconds) - minimum date that can be selected
   *
   * Note the native date picker dialog has some UI glitches on Android 4 and lower
   * when using the `minDate` and `maxDate` options.
   */

  handleDatePicker({
    action, year, month, day,
  }) {
    const { onDatePicked, onCancel } = this.props;
    if (action !== DatePickerAndroid.dismissedAction) {
      if (onDatePicked) {
        onDatePicked(new Date(year, month, day));
      }
    } else if (onCancel) {
      onCancel();
    }
  }

  open(options: Object) {
    DatePickerAndroid.open(options).then(this.handleDatePicker);
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
