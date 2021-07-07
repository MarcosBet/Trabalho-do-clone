

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './login';
import Home from './home';




const screens={
  Home: {
    screen:Home
  },
  Login : {
    screen:Login
  }
}

const AppNavigation = createStackNavigator(screens);


export default createAppContainer(AppNavigation);