import React from 'react';
import { withTheme, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const styles = (props) => {
  console.log(props);
  return ({
    root: {
      top: 24,
      width: 100,
      position: 'absolute',
      backgroundColor: 'red',
    },
  });
};

const themedStyles = withTheme(styles);

const MenuContainer = (props) => {
  const { fonctionalities } = props;
  return (
    <View styles={themedStyles.root}>
      {
        fonctionalities.map(fonctionality => (
          <ListItem
            key={fonctionality.name}
            title={fonctionality.name}
            leftIcon={<FontAwesome name={fonctionality.icon} size={16} />}
          />
        ))
}
    </View>
  );
};

MenuContainer.propTypes = {
  fonctionalities: PropTypes.arrayOf([
    PropTypes.objectOf({
      name: PropTypes.string,
      icon: PropTypes.string,
    }),
  ]),
};

MenuContainer.defaultProps = {
  fonctionalities: [{
    name: 'Home',
    icon: 'home',
  }, {
    name: 'Profile',
    icon: 'user',
  }],
};

export default withTheme(MenuContainer);
