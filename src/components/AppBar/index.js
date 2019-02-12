import React from 'react';
import { Header, withTheme } from 'react-native-elements';
import PropTypes from 'prop-types';


const CustomTabBar = (props) => {
  const { leftComponent, title, rightComponent } = props;
  return (
    <Header
      leftComponent={leftComponent}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      rightComponent={rightComponent}
    />
  );
};

CustomTabBar.propTypes = {
  leftComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      icon: PropTypes.string,
      style: PropTypes.shape(),
    }),
  ]),
  rightComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({
      icon: PropTypes.string,
      style: PropTypes.shape(),
    }),
  ]),
  title: PropTypes.string,
  theme: PropTypes.shape().isRequired,
};

CustomTabBar.defaultProps = {
  title: null,
  leftComponent: null,
  rightComponent: null,
};

export default withTheme(CustomTabBar);
