import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Image } from 'react-native';

const destinationMarker  = require('../assets/icons/marker-icon-destination.png');
const groupMarker = require('../assets/icons/marker-icon-groups.png');

export default class CustomMarker extends Component {
    constructor(props){
        super(props);
           this.state={                
                latitude: 0,
                longitude: 0,                
                title:'', 
                destination: false
        };
    }
    componentDidMount(){
        
        this.setState({
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
        if ((prevState.latitude !== nextProps.latitude) || (prevState.longitude !== nextProps.longitude) 
        || (prevState.title !== nextProps.title) || (prevState.destination !== nextProps.destination)) {
            return {
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
        var path = '';
        if(this.state.destination) { path = destinationMarker } else { path = groupMarker }
        return (            
            <MapView.Marker 
                coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
                title={this.state.title} >                
                <Image source={path} style={{height: 35, width:35 }} />
                       
            </MapView.Marker>
        )
    }
    
}