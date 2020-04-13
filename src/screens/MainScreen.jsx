import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Search from '../components/Search';
import {getMarkers} from '../components/MarkerController';
import CustomMarker from '../components/CustomMarker';


const tilte = 'Destinación';


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
                        this.state.markers &&
                        this.state.markers.map((marker, i) => ( 
                            <CustomMarker 
                                key= {i}
                                latitude= {marker.coordinates.latitude} 
                                longitude= {marker.coordinates.longitude} 
                                title= {marker.title} 
                                destination= {marker.destination} /> ))
                    }
                    
                </MapView>
            </View>
        )
    }
};
    

