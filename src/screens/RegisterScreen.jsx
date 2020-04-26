import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, TouchableOpacity,
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
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',                  
                  backgroundColor: '#FFFFFF',
                }
            }
      >
        <Image
          style={styles.tinyLogo}
          source={require('../assets/img/icon.jpg')}
        />

        <Text style={styles.welcome}>
          <Text style={styles.welcome}>
            {translate('SignUpText')}
            {'\n'}
          </Text>
        </Text>
        <Input
          placeholder={translate('FirstName')}
          leftIcon={(
            <Icon
              Icon="sign-in"
              size={19}
              color="black"
            />
                      )}
        />

        <Input
          placeholder={translate('LastName')}
          leftIcon={(
            <Icon
              Icon="sign-in"
              size={19}
              color="black"
            />
                      )}
        />

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
          placeholder={translate('Password')}
          leftIcon={(
            <Icon
              Icon="sign-in"
              size={19}
              color="black"
            />
                      )}
        />
        <TouchableOpacity
          title="Crear cuenta"
          style={styles.btn_confirm}
          onPress={() => this.props.navigation.navigate('RegisterOk')}
        >
          <Text textAnchor="middle" style={styles.btn_text}>{translate('SignUpText')}</Text>

        </TouchableOpacity>
        <TouchableOpacity
          title="Cancel"
          style={styles.btn_cancel}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text textAnchor="middle" style={styles.btn_text}>{translate('Cancel')}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  tinyLogo: {
    marginTop: 15,
    width: 90,
    height: 90,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 25,
    color: Theme.COLORS.BLACK,
  },
  icon: {
    fontSize: 25,
    position: 'absolute',
    left: 2, // Keep some space between your left border and Image
    top: -10, // Keep some space between your left border and Image
    margin: 10,

    right: 0,

    bottom: 0,
  },
  btn_confirm: {
    backgroundColor: Theme.COLORS.BACKGROUND,
    borderColor: 'black',
    borderWidth: 0.3,
    borderRadius: 10,

    width: 200,
    height: 50,

  },
  btn_text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: Theme.COLORS.WHITE,
    textAlignVertical: 'center',
  },
  btn_cancel: {
    backgroundColor: Theme.COLORS.WARNING,
    borderColor: 'black',
    borderWidth: 0.3,
    borderRadius: 10,
    width: 200,
    height: 50,
  },

});
