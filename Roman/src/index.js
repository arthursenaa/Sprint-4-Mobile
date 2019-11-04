import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './pages/main';
import LoginScreen from './pages/App';

const Login = createStackNavigator({
  App: {screen: LoginScreen},
});

// criar a navegacao
const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
  },
);

// container
export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator,
      Login,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);