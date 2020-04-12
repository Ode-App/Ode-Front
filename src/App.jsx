        import React from 'react';
        import { createAppContainer } from "react-navigation";
        import { createStackNavigator } from "react-navigation-stack";
        import WelcomeScreen from './screens/WelcomeScreen';
        import LoginScreen from './screens/LoginScreen';
        import MainScreen from './screens/MainScreen';
        
        
        export default class App extends React.Component {
          render() {
            return <AppContainer />;
          }
        }
        
        const AppNavigator = createStackNavigator(
          
          {
          Welcome: {
            screen: WelcomeScreen, navigationOptions: {headerShown: false}, 
          },
          Login: {
            screen: LoginScreen, navigationOptions: {headerShown: false}, 
          },
          Main: {
            screen: MainScreen, navigationOptions: {headerShown: false}, 
          }
        },
        {
                initialRouteName: "Welcome"
        }
        );
        
        const AppContainer = createAppContainer(AppNavigator);