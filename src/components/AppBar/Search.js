import React from 'react';
import { withTheme } from 'react-native-elements';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import AnimFromTop from '../animations/AnimFromTop';
import TextInput from '../TextInput';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    padding: 4,
    height: '40%',
    width: '100%',
    backgroundColor: '#004E99',
    borderRightWidth: 2,
    borderColor: '#005faa',
    overflow: 'hidden',
  },
  item: {
  },
});

const MenuContainer = (props) => {
  const {
    search, onChangeSearch,
  } = props;
  const { open } = search;
  return (
    <AnimFromTop open={open} style={styles.root}>
      <TextInput
        icon="user"
        style={styles.inputText}
        placeholder="START"
        onChangeText={start => onChangeSearch({ start })}
      />
      <TextInput
        icon="unlock-alt"
        style={styles.inputText}
        placeholder="END"
        onChangeText={end => onChangeSearch({ end })}
      />
    </AnimFromTop>
  );
};

MenuContainer.propTypes = {
  search: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};

MenuContainer.defaultProps = {
};

export default withTheme(MenuContainer);
