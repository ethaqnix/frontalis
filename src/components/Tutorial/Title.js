import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 32,
    marginTop: 16,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.50)',
    fontWeight: 'bold',
  },
});

export default function Title({ title }:
  {title: string}) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
