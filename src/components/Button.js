import React from 'react';
import { Button, withTheme } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const { theme } = props;
  return (
    <View style={theme.Button}>
      <Button {...props} />
    </View>
  );
};

CustomButton.propTypes = {
  theme: PropTypes.shape(),
};

CustomButton.defaultProps = {
  theme: undefined,
};

export default withTheme(CustomButton);
