import React from 'react';
import { Text, withTheme } from 'react-native-elements';
import { View } from 'react-native';

const TravelList = (props) => {
  const { theme, travel } = props;
  return (
    <View style={theme.Card}>
      <Text>{`Départ ${travel.locations[0]} à ${travel.startAt.toDateString()}`}</Text>
      <Text>{`Arrivée ${travel.locations[travel.locations.lenght - 1]} à ${travel.endAt.toDateString()}`}</Text>
    </View>
  );
};

export default withTheme(TravelList);
