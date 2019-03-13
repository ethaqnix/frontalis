import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/fonts/FontAwesome.ttf';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import store from './redux/configureStore';
import Root from './screens';
import theme from './styles';

const client = new ApolloClient({
  uri: 'http://192.168.43.119:8080/graphql',
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      FontAwesome,
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Root />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Main;

store.subscribe(() => {
});
