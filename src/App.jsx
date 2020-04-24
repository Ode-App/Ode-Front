import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPassScreen from './screens/ForgotPassScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterOkScreen from './screens/RegisterOkScreen';
import CarouselScreen from './screens/CarouselScreen';

export default class App extends React.PureComponent {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(

  {
    Welcome: {
      screen: WelcomeScreen, navigationOptions: { headerShown: false },
    },
    Login: {
      screen: LoginScreen, navigationOptions: { headerShown: false },
    },
    ForgotPass: {
      screen: ForgotPassScreen, navigationOptions: { headerShown: false },
    },
    Profile: {
      screen: ProfileScreen,
    },
    Main: {
      screen: MainScreen, navigationOptions: { headerShown: false },
    },
    Register: {
      screen: RegisterScreen, navigationOptions: {headerShown: false},
    },
    RegisterOk: {
      screen: RegisterOkScreen, navigationOptions: {headerShown: false},
    }, 
    Explore: {
      screen: CarouselScreen, navigationOptions: {headerShown: false},
    },     
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(AppNavigator);
