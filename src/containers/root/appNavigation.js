import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../login';
import Tutorial from '../../screens/Tutorial';
import Home from '../../screens/Home/Home';


const AppNavigator = createSwitchNavigator({
  Tutorial: {
    screen: Tutorial,
  },
  Login: {
    screen: Login,
  },
  App: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
