import React from 'react';
import { withTheme, ListItem, Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import { StatusBar, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Header } from 'react-navigation';
import AnimFromLeft from '../animations/AnimFromLeft';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 1,
    padding: 4,
    height: '100%',
    width: '50%',
    marginTop: Header.HEIGHT + StatusBar.currentHeight,
    backgroundColor: '#004E99',
    borderRightWidth: 2,
    borderColor: '#005faa',
  },
  item: {
  },
});

const MenuContainer = (props) => {
  const {
    open, onPress, navigation,
  } = props;
  return (
    <AnimFromLeft open={open} style={styles.root}>
      {
        navigation.state.routes.map(route => (
          <ListItem
            containerStyle={styles.item}
            key={route.key}
            title={route.routeName}
            leftElement={<FontAwesome name={route.icon} size={16} />}
            onPress={() => onPress(route.key, navigation.navigate)}
            bottomDivider={<Divider style={{ backgroundColor: '005faa' }} />}
          />
        ))
        }
    </AnimFromLeft>
  );
};

MenuContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  onPress: PropTypes.func.isRequired,
};

MenuContainer.defaultProps = {
};

export default withTheme(MenuContainer);
