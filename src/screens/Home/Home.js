import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class Home extends PureComponent {
  render() {
    return (
      <View styles={styles.container}>
        <Header />
      </View>
    );
  }
}
