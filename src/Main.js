import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import FontAwesome from '@expo/vector-icons/fonts/FontAwesome.ttf';
import store from './redux/configureStore';
import Root from './screens';
import theme from './styles';

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
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Main;

store.subscribe(() => {
});
