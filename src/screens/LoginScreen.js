
import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button, Alert,
} from 'react-native';
import Theme from '../constants/Theme';



export default class LoginScreen extends Component {
  render() {
    return (
      <View style={
          {
            flex: 1,
            marginTop: 80,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 90,
          }
        }
      >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/img/icon.jpg')}
        />
        <Text style={styles.welcome}>
          <Text style={styles.welcome}>
            Introduce tu email y password para empezar
            {'\n'}
          </Text>
        </Text>
        <Button
          title="Iniciar sesión" 
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  };
};


const styles = StyleSheet.create({

  tinyLogo: {
    width: 90,
    height: 90,
  },
  welcome: {
    fontSize: 34,
    textAlign: 'center',
    margin: 30,
    color: Theme.COLORS.BLACK,
  },

  description: {
    flex: 0.5,
    fontSize: 17,
    margin: 30,
    textAlign: 'center',
    color: Theme.COLORS.BLACK,
  },

});
