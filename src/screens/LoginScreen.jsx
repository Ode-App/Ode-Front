import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button,TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../constants/Theme';
import { translate } from '../translations/config/i18nConfig';

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
          placeholder="Email"
          leftIcon={(
            <Icon
              Icon="user"
              size={19}
              color="black"
            />
  )}
        />
        <Input
          placeholder="Password"
          leftIcon={(
            <Icon
              Icon="sign-in"
              size={19}
              color="black"
            />
  )}
        />

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPass')}>
              <View style={styles.center}>
                <Text style={styles.link_text}>{translate('ResetPass')}</Text>
              </View>
            </TouchableOpacity>

        <View style={styles.fixToText}>
          
          <Button
            title="Iniciar sesión"
            onPress={() => this.props.navigation.navigate('Main')}
            color={Theme.COLORS.BUTTON_COLOR}
          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <View style={styles.center}>
                <Text style={styles.link_text}>{translate('NewAccount')}</Text>
              </View>
            </TouchableOpacity>
      </View>
    );
  }
}


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
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});