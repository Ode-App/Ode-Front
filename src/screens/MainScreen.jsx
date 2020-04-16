import React, { Component } from 'react';
import { StyleSheet,
    Text,
    View,
    Animated,
    Dimensions, } from 'react-native';
import MapView from 'react-native-maps';
import {getMarkers} from '../components/MarkerController';
import CustomMarker from '../components/CustomMarker';


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
            <View style={{ flex: 1 }}>
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
                    contentContainerStyle={styles.paddingEnd}
                    >
                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>
                        
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                            <Text numberOfLines={1} style={styles.cardDescription}>
                            {marker.description}
                            </Text>
                        </View>
                        </View>
                    ))}
                </Animated.ScrollView>
            </View>
        )
    }

    
};

const styles = StyleSheet.create({
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0
    },
    paddingEnd: {
      paddingRight: 10,
      paddingLeft: 10
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    }
  });
    

