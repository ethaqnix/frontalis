import React from 'react';
import { Button, withTheme } from 'react-native-elements';
import { View } from 'react-native';

const CustomButton = (props) => {
  const { theme } = props;
  console.log(theme.Button);
  return (
    <View style={theme.Button}>
      <Button {...props} />
    </View>
  );
};

export default withTheme(CustomButton);
