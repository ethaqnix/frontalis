import React from 'react';
import {
  View, Image, Text, KeyboardAvoidingView,
} from 'react-native';
import { AuthSession } from 'expo';
import { Button, FormInput } from '../../components';
// import { Button } from 'react-native-elements';

const hmacsha1 = require('hmacsha1');
const appLogo = require('../../assets/RN_Logo.png');

const flickrAppID = 'ce00aefd2a5961b696d3e0d869c1ab36';
const flickrSecret = '14de5304c098c075';

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
    justifyContent: 'space-around',
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = '';
    this.password = '';
    this.state = {
      result: null,
    };
  }

  handlePressAsync = async () => {
    const oauthNonce = 'zqdzd8bbn479601451180zqddzqzq';
    const oauthTimestamp = new Date().getTime();
    const redirectUrl = AuthSession.getRedirectUrl();
    const url2 = 'https://www.flickr.com/services/oauth/request_token';
    const param2 = `oauth_callback=${encodeURIComponent(redirectUrl)}`
    + `&oauth_consumer_key=${flickrAppID}`
    + `&oauth_nonce=${oauthNonce}`
    + '&oauth_signature_method=HMAC-SHA1'
    + `&oauth_timestamp=${oauthTimestamp}`
    + '&oauth_version=1.0';
    /* url2 = url2.replace(new RegExp(':', 'g'), '%3A');
    url2 = url2.replace(new RegExp('/', 'g'), '%2F');
    param2 = param2.replace(new RegExp(':', 'g'), '%253A');
    param2 = param2.replace(new RegExp('/', 'g'), '%252F');
    param2 = param2.replace(new RegExp('&', 'g'), '%26');
    param2 = param2.replace(new RegExp('=', 'g'), '%3D'); */
    const hash = hmacsha1(`${flickrSecret}&`, `GET&${url2}&${param2}`);
    console.log(`GET&${url2}&${param2}`);
    const jsonAnswer = fetch('https://www.flickr.com/services/oauth/request_token?'
    + `oauth_consumer_key=${flickrAppID}`
    + `&oauth_nonce=${oauthNonce}`
    + '&oauth_signature_method=HMAC-SHA1'
    + `&oauth_timestamp=${oauthTimestamp}`
    + '&oauth_version=1.0'
    + `&oauth_signature=${hash}`
    + `&oauth_callback=${encodeURIComponent(redirectUrl)}`)
      .then((data) => {
        console.log(data.status);
      });
  };

  textChanged(text, type) {
    switch (type) {
      case 'LOGIN':
        this.login = text;
        break;
      case 'PASS':
        this.password = text;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.main_container} behavior="padding">
        <View style={styles.image_container}>
          <Image style={styles.app_image} source={appLogo} />
          <Text style={styles.app_title}>Native Legend</Text>
        </View>
        <View style={styles.form_container}>
          <FormInput
            icon="user"
            style={styles.inputText}
            placeholder="LOGIN"
            onChangeText={text => this.textChanged(text, 'LOGIN')}
          />
          <FormInput
            icon="user"
            style={styles.inputText}
            placeholder="PASSWORD"
            onChangeText={text => this.textChanged(text, 'PASS')}
          />
        </View>
        <View style={styles.button_container}>
          <Button
            onPress={() => {
              this.handlePressAsync();
              this.props.navigation.navigate('App');
            }}
            title="Sign In"
          />
          <Button
            onPress={() => {
              console.log('plop');
              this.props.navigation.navigate('Register');
            }}
            title="Register"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
