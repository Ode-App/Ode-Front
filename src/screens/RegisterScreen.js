import { translate } from '../translations/config/i18nConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button, Alert,
} from 'react-native';
import Theme from '../constants/Theme';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




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
            marginVertical: 20,
          }
        }
      >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/img/icon.jpg')}
        />
        <Text style={styles.welcome}>
          <Text style={styles.welcome}>
          {translate('IntPass')}
            {'\n'}
          </Text>
        </Text>

        <Input
  placeholder='Email'
  leftIcon={
    <Icon
         Icon='user'
      size={19}
      color='black'
    />
  }
/>
<Input
  placeholder={translate('FirstName')}
  leftIcon={
    <Icon
      Icon="sign-in"
      size={19}
      color='black'
    />
  }
/>

<Input
  placeholder={translate('LastName')}
  leftIcon={
    <Icon
      Icon="sign-in"
      size={19}
      color='black'
    />
  }
/>
        <Button
          title="Crear cuenta"
          onPress={() => this.props.navigation.navigate('Login')} color= {Theme.COLORS.BUTTON_COLOR_2}
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
    fontSize: 25,
    textAlign: 'center',
    margin: 25,
    color: Theme.COLORS.BLACK,
  }
});
