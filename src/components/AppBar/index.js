import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, withTheme } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
  leftComponent: {
    width: '20%',
  },
  title: {
    width: '80%',
  },
  rightComponent: {
    width: '0%',
  },
});

const CustomTabBar = (props) => {
  const { leftComponent, title, rightComponent } = props;
  return (
    <Header
      containerStyle={styles.root}
      leftComponent={leftComponent}
      leftContainerStyle={styles.leftComponent}
      centerComponent={{ text: title, style: { color: '#fff' } }}
      titleContainerStyle={styles.title}
      rightComponent={rightComponent}
      rightContainerStyle={styles.rightComponent}
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
    PropTypes.arrayOf(
      PropTypes.element,
    ),
  ]),
  title: PropTypes.string,
};

CustomTabBar.defaultProps = {
  title: null,
  leftComponent: null,
  rightComponent: null,
};

export default withTheme(CustomTabBar);
