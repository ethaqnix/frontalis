import React from 'react';
import { Header, withTheme } from 'react-native-elements';
import PropTypes from 'prop-types';

const CustomTabBar = (props) => {
  const {
    leftComponent, onClickLeftComponent, title, rightComponent, onClickRightComponent, theme,
  } = props;
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
  onClickLeftComponent: PropTypes.func,
  onClickRightComponent: PropTypes.func,
  theme: PropTypes.shape().isRequired,
};

CustomTabBar.defaultProps = {
  title: null,
  leftComponent: null,
  rightComponent: null,
  onClickLeftComponent: null,
  onClickRightComponent: null,
};

export default withTheme(CustomTabBar);
