import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import DatePickerDialog from '../DatePicker/DatePickerDialog.android';
import TimePickerDialog from '../TimePicker/TimePickerDialog.android';

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  pickerBox: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    borderColor: 'black',
    borderWidth: 0.5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  iconPicker: {
    padding: 8,
    borderLeftWidth: 0.5,
  },
  datePickerText: {
    padding: 8,
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.dialogDateRef = React.createRef();
    this.dialogTimeRef = React.createRef();
    this.state = {
      text: '',
      date: null,
    };
  }


  /**
   * Journey date textbox click listener
   */
  onDatePress = () => {
    const { date: stateDate } = this.state;

    let date = stateDate;
    if (!date || date === null) {
      date = new Date();
      this.setState({
        date: new Date(),
      });
    }
    this.dialogDateRef.open({
      date,
      minDate: new Date(),
    });
  }

  onTimePress = () => {
    const { time } = this.state;

    this.dialogTimeRef.open({
      ...time,
      is24Hour: true,
    });
  }

  onDatePicked = (date) => {
    this.setState({
      date,
    });
    this.onTimePress();
  }

  onTimePicked = (time) => {
    const { date } = this.state;
    this.setState({
      time,
      text: `${moment(date).format('DD MMM, YYYY')} - ${time.hour}h ${time.minute}`,
    });
  }

  render() {
    const { text } = this.state;
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ marginTop: 8 }}>{label}</Text>
          <TouchableOpacity onPress={this.onDatePress}>
            <View style={styles.pickerBox}>
              <View style={styles.datePickerText}>
                <Text>{text}</Text>
              </View>
              <View style={styles.iconPicker}>
                <FontAwesome name="calendar" size={24} />
              </View>
            </View>
          </TouchableOpacity>

        </View>
        <DatePickerDialog
          ref={(el) => { this.dialogDateRef = el; }}
          onDatePicked={this.onDatePicked}
        />
        <TimePickerDialog
          ref={(el) => { this.dialogTimeRef = el; }}
          onTimePicked={this.onTimePicked}
        />
      </View>
    );
  }
}

DateTimePicker.propTypes = {
  label: PropTypes.string,
},

DateTimePicker.defaultProps = {
  label: '',
};
