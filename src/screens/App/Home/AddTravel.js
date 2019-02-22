import React from 'react';
import {
  KeyboardAvoidingView, Keyboard, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';
import { Mutation } from 'react-apollo';
// tmp
import gql from 'graphql-tag';
import DateTimePicker from '../../../components/Picker/DateTimePicker/DateTimePicker';
import Button from '../../../components/Button';
// import { ADD_USER } from '../../../utils/mutations';

const styles = {
  main_container: {
    flex: 1,
    margin: 16,
    justifyContent: 'space-between',
  },
  form: {
    marginTop: 20,
  },
  actions: {

  },
};

class AddTravel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboard: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  textChanged = type => (text) => {
    switch (type) {
      case 'start':
        this.setState({ start: text });
        break;
      case 'end':
        this.setState({ end: text });
        break;
      default:
        break;
    }
  }

  keyboardDidShow = () => {
    this.setState({ keyboard: true });
  }

  keyboardDidHide = () => {
    this.setState({ keyboard: false });
  }

  render() {
    const { keyboard } = this.state;
    const { navigation } = this.props;


    const ADD_USER = gql`
mutation AddUser($name: String!) {
  addUser(name: $name) {
    name
  }
}
`;
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { data }) => (
          <KeyboardAvoidingView style={styles.main_container} behavior="padding">
            <View>
              <View style={styles.form}>
                <Input
                  placeholder="Lieu de départ"
                  onChangeText={this.textChanged('start')}
                />
                <DateTimePicker label="Date de départ" />
              </View>
              <View style={styles.form}>
                <Input
                  placeholder="Lieu d'arrivé"
                  onChangeText={this.textChanged('end')}
                />
                <DateTimePicker label={"Date d'arrivé"} />
              </View>
            </View>
            <View style={styles.actions}>
              <Button
                onPress={() => {
                  addUser({ variables: { name: 'plop' } });
                }}
                title="Valider"
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Mutation>
    );
  }
}

AddTravel.propTypes = {
  navigation: PropTypes.shape(),
};

AddTravel.defaultProps = {
  navigation: {},
};

export default AddTravel;
