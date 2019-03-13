import React from 'react';
import PropTypes from 'prop-types';
import { Input, ListItem } from 'react-native-elements';
import { View } from 'react-native';

class SelectInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const {
      placeholder, data, navigation,
    } = this.props;
    const { value } = this.state;
    return (
      <View>
        <Input
          onChangeText={event => this.setState({ value: event })}

          placeholder={placeholder}
        />
        {
      data.filter(({ address }) => address.search(RegExp(value, 'i')) !== -1).map(elem => (
        <ListItem
          key={elem.id}
          title={elem.address}
          onPress={() => {
            navigation.navigate('AddTravel', { [navigation.getParam('type')]: elem });
          }}
        />
      ))
    }
      </View>
    );
  }
}

SelectInput.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

SelectInput.defaultProps = {
  placeholder: '',
  data: [],
};

export default SelectInput;
