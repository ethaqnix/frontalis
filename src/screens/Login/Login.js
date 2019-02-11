import React from 'react';
import {
  View, Image, Text, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, FormInput } from '../../components';
import AnimFromTop from '../../components/animations/AnimFromTop';

const appLogo = require('../../assets/wheel.png');


const styles = {
  main_container: {
    flex: 1,
  },
  app_image: {
    tintColor: '#005faa',
    height: 160,
    width: 160,
  },
  app_title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#005faa',
  },
  app_header_image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app_header_title: {
    position: 'absolute',
    top: '35%',
    left: 0,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_container: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  form_container: {
    flex: 1,

  },
  button_container: {
    flex: 1,
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
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

  textChanged = text => (type) => {
    switch (type) {
      case 'LOGIN':
        this.setState({ login: text });
        break;
      case 'PASS':
        this.setState({ login: text });
        this.password = text;
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
    const { login, password, keyboard } = this.state;
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView style={styles.main_container} behavior="padding">
        <AnimFromTop
          style={styles.app_header_image}
          open={keyboard}
        >
          <Image style={styles.app_image} source={appLogo} />
        </AnimFromTop>
        <AnimFromTop
          style={styles.app_header_title}
          open={keyboard}
          outputRange={-75}
        >
          <Text style={styles.app_title}>Frontalis</Text>
        </AnimFromTop>
        <View style={{ ...styles.image_container, flex: keyboard ? 1 : 2 }} />
        <View style={styles.form_container}>
          <FormInput
            icon="user"
            style={styles.inputText}
            placeholder="LOGIN"
            onChangeText={this.textChanged('LOGIN')}
          />
          <FormInput
            icon="unlock-alt"
            style={styles.inputText}
            placeholder="PASSWORD"
            onChangeText={this.textChanged('PASS')}
          />
        </View>
        <View style={styles.button_container}>
          <Button
            onPress={() => {
              navigation.navigate('App');
            }}
            title="Sign In"
          />
          <Button
            onPress={() => {
              navigation.navigate('Register');
            }}
            title="Register"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape(),
};

Login.defaultProps = {
  navigation: {},
};

export default Login;
