import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';

const destinationMarker  = require('../assets/icons/marker-icon-destination.png');
const groupMarker = require('../assets/icons/marker-icon-groups.png');
const pinColor = '#000000';

export default class CustomMarker extends Component {
    constructor(props){
        super(props);
           this.state={
                id: 0,           
                latitude: 0,
                longitude: 0,                
                title:'', 
                destination: false
        };
    }
    componentDidMount(){
        
        this.setState({
            id: this.props.id,
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            title: this.props.title,
            destination: this.props.destination
        });
    }

    shouldComponentUpdate(nextProps,nextState){
       // your condition if you want to re-render every time on props change
     return true;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if ((prevState.id !== nextProps.id) || (prevState.latitude !== nextProps.latitude) || (prevState.longitude !== nextProps.longitude) 
        || (prevState.title !== nextProps.title) || (prevState.destination !== nextProps.destination)) {
            return {
                id: nextProps.id,
                latitude : nextProps.latitude,
                longitude : nextProps.longitude,
                title : nextProps.title,
                destination: nextProps.destination
            };
        } 
        else {
            return null;
        }
    }


    render() {
        var pinColor = '';
        if(this.state.destination) { pinColor =  'indigo' } else { pinColor = 'green' }
        return (            
            <MapView.Marker 
                key= {this.state.id}
                coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
                title={this.state.title} 
                pinColor= {pinColor}
                >                
                
                       
            </MapView.Marker>
        )
    }
    
}