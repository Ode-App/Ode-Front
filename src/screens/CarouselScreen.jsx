import React, { Component } from "react";
import { SearchBar, Avatar,
  } from 'react-native-elements';
  
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
} from "react-native";

import Theme from '../constants/Theme';
import ActionButton from 'react-native-action-button';

import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 2.9;
const CARD_WIDTH = CARD_HEIGHT - 10;

export default class screens extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 41.38667,
          longitude: 2.17000,
        },
        destiny: "Plaza Cataluña",
        hour:"9:00",
        origin: "Aeropuerto T1, Josep Tarradellas"
      },
      {
        coordinate: {
          latitude: 41.5667,
          longitude: 2.0167,
        },
        destiny: "Les Fonts",
        hour:"19:00",
        origin: "Estació del Nord"
      },
      {
        coordinate: {
          latitude: 41.3667,
          longitude: 2.0833,
        },
        destiny: "Esplugues",
        hour:"15:10",
        origin: "Arepuerto T2"
      },
      {
        coordinate: {
          latitude: 41.5432892,
          longitude: 2.1094201,
        },
        destiny: "Sabadell",
        hour:"7:45",
        origin: "Sants"
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: 2.1653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        this.setState({
            region: {
                latitude,
                longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            },
            marker: null
        })
     }
)}
     
  updateSearch = search => {
    this.setState({ search });
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const { region, destination ,search } = this.state;

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
        
    <View style={styles.container}>
        <View style={styles.subheader}>
          <SearchBar containerStyle={styles.searchbar}
            round
            showCancel
            lightTheme
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Avatar containerStyle= {styles.avatar}
                rounded
                size="medium"
                onPress={() => this.props.navigation.navigate('Profile')}
                title="SB"
                source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGysqfNLtxpBQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=SDzkxqpWyMDr5SJPxTkurjYQK6XPfkbg4D-Kipxmiic',
                }}
            />   
            </View>     
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            /* Card format*/
            <View style={styles.card} key={index}>
              <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>Salida a las: {marker.hour}
                </Text>
                <Text numberOfLines={2}>Origen: {marker.origin}
                </Text>
                <Icon
                name='chevron-down'
                type='font-awesome'/>
                <Text numberOfLines={2}>Destino: {marker.destiny}</Text>
                <Avatar 
              rounded
              size="small"
              title="SB"
              source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQGysqfNLtxpBQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=SDzkxqpWyMDr5SJPxTkurjYQK6XPfkbg4D-Kipxmiic',
              }}
              /> 
              </View>
              <View style={{flexDirection: 'row', justifyContent:'center' }}>
               
              <Icon
                raised
                name='comment-o'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
               <Icon
                raised
                name='user-plus'
                type='font-awesome'
                color='#008000'
                onPress={() => console.log('hello')} />
                </View>
                
            </View>
          ))}
        </Animated.ScrollView>
        <ActionButton buttonColor={Theme.COLORS.PRIMARY}/*Action Button*/>
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
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 5,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#0000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  textContent: {
    flex: 1,
    marginTop: 10,
  },
  cardtitle: {
    fontSize: 20,
    marginTop: 5,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
  header:{
    flexDirection: 'column',
  },
  avatar:{
    right: 10,
    marginLeft: 5
  },
  subheader:{
    marginTop:25,
    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignItems: 'center'
  },
  searchbar:{
    flex:1,
    backgroundColor: '#ffff',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 20,
    color: 'white',
  },
});

AppRegistry.registerComponent("mapfocus", () => screens);
