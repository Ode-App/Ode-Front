        import React from 'react';
        import { createAppContainer } from "react-navigation";
        import { createStackNavigator } from "react-navigation-stack";
        import WelcomeScreen from './screens/WelcomeScreen';
        import LoginScreen from './screens/LoginScreen';
        import RegisterScreen from './screens/RegisterScreen';
        import RegisterOkScreen from './screens/RegisterOkScreen';
        
        
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
          Register: {
            screen: RegisterScreen, navigationOptions: {headerShown: false},
          },
          RegisterOk: {
            screen: RegisterOkScreen, navigationOptions: {headerShown: false},
          },
        },
        {
                initialRouteName: "Welcome"
        }
        );
        
        const AppContainer = createAppContainer(AppNavigator);