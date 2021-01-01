import React, { Component } from 'react';
import {
  StyleSheet, View, Image, Text, Button, Alert, TouchableOpacity, ScrollView,
} from 'react-native';
import { Input, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../constants/Theme';
import { translate } from '../translations/config/i18nConfig';
import {UsersApi} from '../services/ode-api';

function signInOut(username, pswd) {
    // Initialise the UsersApi object.
    const userApiCall = new UsersApi();
    // Use the userApiCall to find the method used and attach the object to send. Use Promise to retrieve the response.
    userApiCall.v1UserAuthenticatePost({
        username: username,
        password: pswd

    }).then(async (response) => {
        const json = response;
        console.log("RESPONSE", response)
         //this.props.navigation.navigate('RegisterOk')
        return json;
    }).catch((error) => {
        //alert(error.message)
        console.log("ERROR", error)
        console.error(`Error: ${error.message}`);
        return error.message

    });

}


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    return_register = () => {
        this.props.navigation.navigate('Main')
    }

    signIn = () => {
        const resp = signInOut(this.state.username, this.state.password);
        console.log(resp.json());
        this.return_register();

    }

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
            {translate('IntPass')}
            {'\n'}
          </Text>
        </Text>

        <Input
          placeholder="UserName"
          onChangeText={(username) => this.setState({username})}
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
          onChangeText={(password) => this.setState({password})}
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
            //onPress={() => this.props.navigation.navigate('Main')}
            color={Theme.COLORS.BUTTON_COLOR}
            onPress={() => this.signIn()}

          />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
          <View style={styles.center}>
            <Text style={styles.link_text}>{translate('NewAccount')}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <SocialIcon
            type="twitter"
          />
          <SocialIcon
            type="facebook"
          />
          <SocialIcon
            type="google"
          />
        </View>
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
