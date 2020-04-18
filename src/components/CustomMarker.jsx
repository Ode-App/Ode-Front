import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Theme from '../constants/Theme';


export default class CustomMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      latitude: 0,
      longitude: 0,
      title: '',
      destination: false,
    };
  }


  componentDidMount() {
    this.setState({
      id: this.props.id,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      title: this.props.title,
      destination: this.props.destination,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // your condition if you want to re-render every time on props change
    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ((prevState.id !== nextProps.id) || (prevState.latitude !== nextProps.latitude) || (prevState.longitude !== nextProps.longitude)
        || (prevState.title !== nextProps.title) || (prevState.destination !== nextProps.destination)) {
      return {
        id: nextProps.id,
        latitude: nextProps.latitude,
        longitude: nextProps.longitude,
        title: nextProps.title,
        destination: nextProps.destination,
      };
    }

    return null;
  }


  render() {
    let pinColor = '';
    if (this.state.destination) { pinColor = Theme.COLORS.PINCOLOR_DESTINATION; } else { pinColor = Theme.COLORS.PINCOLOR_GROUPS; }
    return (
      <MapView.Marker
        key={this.state.id}
        coordinate= {{ latitude: this.state.latitude, longitude: this.state.longitude }}
        title={this.state.title}
        pinColor={pinColor}
      />
    );
  }
}
