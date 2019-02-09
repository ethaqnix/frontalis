import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import store from './redux/configureStore';
import Root from './containers/root/appNavigation';
import theme from './styles';

const Main = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </Provider>
);

export default Main;

store.subscribe(() => {
});
