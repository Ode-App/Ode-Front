import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import Search from '../components/Search';
import CustomMarker from '../components/CustomMarker';





export default class MainScreen extends Component {
    state = {
        region: null,
    }
    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            this.setState({
                region: {
                    latitude,
                    longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                }
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
                    
                >
                    
                    <CustomMarker  latitude = {41.387010} longitude = {2.170047}  title={'Prueba'} destination = {true} />
                    <CustomMarker  latitude = {41.3887901} longitude = {2.1589899}  title={'Prueba2'} destination = {false} />
                                      
                </MapView>
            </View>
        )
    }
};
    

