import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './Login/Login';
import App from './App';


const AppNavigator = createSwitchNavigator({
  App: {
    screen: App,
  },
  Login: {
    screen: Login,
  },
});

export default createAppContainer(AppNavigator);
