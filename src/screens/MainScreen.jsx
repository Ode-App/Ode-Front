import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Theme from '../constants/Theme';
const SideMenu = require('react-native-side-menu');
import { Avatar } from 'react-native-elements';


export default class MainScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="medium"
            onPress={() => this.props.navigation.navigate('Profile')}
            source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGysqfNLtxpBQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=SDzkxqpWyMDr5SJPxTkurjYQK6XPfkbg4D-Kipxmiic',
            }}
          />
        </View>
        
        <ActionButton buttonColor={Theme.COLORS.PRIMARY}>
          <ActionButton.Item
            buttonColor={Theme.COLORS.BUTTON_COLOR}
            title="New trip"
            onPress={() => console.log('notes tapped!')}>
            <Icon name="ios-car" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={Theme.COLORS.BUTTON_COLOR}
            title="Schedule"
            onPress={() => {}}>
            <Icon
              name="ios-calendar"
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={Theme.COLORS.BUTTON_COLOR}
            title="Explore trips"
            onPress={() => {}}>
            <Icon name="ios-search" 
            style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    margin: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
