// @flow
import React from 'react';
import { View, StyleSheet, Image as RNImage } from 'react-native';
import { Icon } from 'react-native-elements';
import { Icon as IconType, Img } from './types';

const styles = StyleSheet.create({
  imgContainer: {
    minHeight: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
});

export default function Image({ img, icon }: {
  img: ?Img,
  icon: ?IconType
}) {
  let child = null;
  if (img) {
    child = <RNImage source={img.src} alt={img.alt} />;
  } else if (icon) {
    child = (
      <Icon
        name={icon.name}
        size={256}
        type="font-awesome"
        color={icon.color}
      />
    );
  }
  return (
    <View style={styles.imgContainer}>
      {child}
    </View>
  );
}
