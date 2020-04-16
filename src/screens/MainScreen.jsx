import React, { Component } from 'react';
import { StyleSheet,
    Text,
    View,
    Animated,
    Dimensions, } from 'react-native';
import MapView from 'react-native-maps';
import Search from '../components/Search';
import {getMarkers} from '../components/MarkerController';
import CustomMarker from '../components/CustomMarker';


const tilte = 'Destinación';
const { width, height } = Dimensions.get("window");
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
                                title= {this.title}
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
                    contentContainerStyle={styles.endPadding}
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
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 0,
    },
    endPadding: {
      paddingRight: 0,
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
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
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
      backgroundColor: "rgba(130,4,150, 0.3)",
      position: "absolute",
      borderWidth: 1,
      borderColor: "rgba(130,4,150, 0.5)",
    },
  });
    

