import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/main';
import LoginInScreen from './pages/app'; 
import CadastroScreen from './pages/cadastrar'; 

const Login = createStackNavigator({
  Login: { screen: LoginInScreen },
});

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Cadastro: {
      screen: CadastroScreen,
    }
  },
);

// const MainNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen,
//   },
// });

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