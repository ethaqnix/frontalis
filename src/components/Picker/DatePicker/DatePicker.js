import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';
import DatePickerDialog from './DatePickerDialog.android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 16,
    paddingLeft: 16,
  },
  content: {

  },
  datePickerBox: {
    marginTop: 9,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#121212',
  },
});

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.dialogRef = React.createRef();
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
    this.dialogRef.open({
      date,
      minDate: new Date(),
    });
  }

  onDatePicked = (date) => {
    this.setState({
      date,
      text: moment(date).format('DD MMM, YYYY'),
    });
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View>

          <Text style={{ marginTop: 20 }}>Date de départ</Text>
          <TouchableOpacity onPress={this.onDatePress}>
            <View style={styles.datePickerBox}>
              <Text style={styles.datePickerText}>{text}</Text>
            </View>
          </TouchableOpacity>

        </View>
        <DatePickerDialog
          ref={(el) => { this.dialogRef = el; }}
          onDatePicked={this.onDatePicked}
        />
      </View>
    );
  }
}
