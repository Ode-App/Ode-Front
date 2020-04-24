import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Theme from '../constants/Theme';
import { Avatar, SearchBar  } from 'react-native-elements';
import { StyleSheet,
    Text,
    View,
    Animated,
    Dimensions, } from 'react-native';
import MapView from 'react-native-maps';
import {getMarkers} from '../components/MarkerController';
import CustomMarker from '../components/CustomMarker';

const SideMenu = require('react-native-side-menu');
const tilteDestination = 'Destinación';
const { height } = Dimensions.get("window");
const CARD_HEIGHT = height / 3;
const CARD_WIDTH = CARD_HEIGHT ;


export default class MainScreen extends Component {
  state = {
        region: null,
        destination: null,
        markers: []
    }

  async componentDidMount() {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          this.setState({
              region: {
                  latitude,
                  longitude,
                  latitudeDelta: 0.03,
                  longitudeDelta: 0.03,
              },
              marker: null
          })
       }
  )}

  render() {
    const { region, destination } = this.state;
    return (
      <View style={styles.container}>
          <MapView  style={{ flex: 1 }}
              region={region}
              showsUserLocation
              loadingEnabled
              onPress={ (event) => this.setState({destination: event.nativeEvent.coordinate, markers: getMarkers(event.nativeEvent.coordinate, this.title, true)})}
              >
              {
                  this.state.destination &&
                      <CustomMarker 
                          latitude= {destination.latitude} 
                          longitude= {destination.longitude}
                          title= {tilteDestination}
                          destination= {true} /> 
              }
              {
                  this.state.markers &&
                  this.state.markers.map((marker, i) => ( 
                      <CustomMarker 
                          key= {i}
                          latitude= {marker.coordinates.latitude} 
                          longitude= {marker.coordinates.longitude} 
                          title= {marker.title} 
                          destination= {marker.destination} />))
              }                    
          </MapView>
          <Avatar containerStyle= {styles.avatar}
              rounded
              size="medium"
              onPress={() => this.props.navigation.navigate('Profile')}
              title="SB"
              source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGysqfNLtxpBQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=SDzkxqpWyMDr5SJPxTkurjYQK6XPfkbg4D-Kipxmiic',
              }}
          />           

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
    flex:1,
    display: "flex",
    flexDirection: "column"
  },
  avatar: {
    position: 'absolute',
    top: '7%',
    right: '6%'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 29,
    color: 'white',
  },
});
