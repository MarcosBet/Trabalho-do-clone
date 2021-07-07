

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './login';
import Home from './home';




const screens={
  
  Login : {
    screen:Login
  },
  Home: {
    screen:Home
  },
  
}

const AppNavigation = createStackNavigator(screens);


export default createAppContainer(AppNavigation);