import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import TimePickerDialog from './TimePickerDialog.android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  datePickerBox: {
    marginTop: 9,
    borderColor: '#ABABAB',
    borderWidth: 0.5,
    padding: 0,
    borderRadius: 4,
    height: 38,
    justifyContent: 'center',
  },
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#121212',
  },
});

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.dialogRef = React.createRef();
    this.state = {
      text: '',
      time: {
        hour: 0,
        minute: 0,
      },
    };
  }


  /**
   * Journey date textbox click listener
   */
  onTimePress = () => {
    const { time } = this.state;

    this.dialogRef.open({
      ...time,
      is24Hour: true,
    });
  }

  onTimePicked = (time) => {
    this.setState({
      time,
      text: `${time.hour}h ${time.minute}min`,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>

          <Text>Date de départ</Text>
          <TouchableOpacity onPress={this.onTimePress}>
            <View style={styles.datePickerBox}>
              <Text style={styles.datePickerText}>{text}</Text>
            </View>
          </TouchableOpacity>

        </View>
        <TimePickerDialog
          ref={(el) => { this.dialogRef = el; }}
          onTimePicked={this.onTimePicked}
        />
      </View>
    );
  }
}
