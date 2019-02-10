// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.40)',
  },
});

export default function Description({ description }:
  {description: string}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
