import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, withTheme } from 'react-native-elements';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { theme, icon } = props;
  return (
    <Input
      leftIconContainerStyle={theme.FormInput.icon}
      containerStyle={theme.FormInput.root}
      leftIcon={
        icon && (
        <Icon
          name={icon}
          size={24}
          color={theme.FormInput.color}
        />
        )
      }
      {...props}
    />
  );
};

TextInput.propTypes = {
  theme: PropTypes.shape(),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

TextInput.defaultProps = {
  theme: undefined,
  icon: null,
};

export default withTheme(TextInput);
