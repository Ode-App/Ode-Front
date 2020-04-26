
import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { translate } from '../translations/config/i18nConfig';

const list = [
  {
    title: 'Personal data',
    icon: 'perm-identity',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Friends',
    icon: 'supervisor-account',
  },
  {
    title: 'Settings',
    icon: 'settings',
  }, {
    title: 'Upgrade account',
    icon: 'call-made',
  },

];


export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="large"
           /* showEditButton */
            title="SB"
            source={{
              uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGysqfNLtxpBQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=SDzkxqpWyMDr5SJPxTkurjYQK6XPfkbg4D-Kipxmiic',
            }}
          />
        </View>
        <Text style={styles.welcome}>
          Sergio Benito
        </Text>
        <View>
          {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
            />
          ))
        }
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    marginTop: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
