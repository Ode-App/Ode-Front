import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button,
} from 'react-native';
import Theme from '../constants/Theme';
import { translate } from '../translations/config/i18nConfig';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={
          {
            backgroundColor: '#FFFFFF',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }
        }
      >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/img/icon.jpg')}
        />
        <Text style={styles.welcome}>
          <Text style={styles.welcome}>
            {translate('Welcome')}
            {'\n'}
          </Text>
          <Text style={styles.description}>
            {'\n'}
            {translate('Description')}
            {' '}
          </Text>
        </Text>
        <Button
          title={translate('Continue')}
          onPress={() => this.props.navigation.navigate('Login')}
          color={Theme.COLORS.BUTTON_COLOR}
        />
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
