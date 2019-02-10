import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/login';
import App from './App';


const AppNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  App,
});

export default createAppContainer(AppNavigator);
