import React, { Component } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Theme from '../constants/Theme';
import ActionButton from 'react-native-action-button';
import MapView from 'react-native-maps';
import { StyleSheet,
  View, Dimensions} from 'react-native';
import _default from 'expo/build/Linking/Linking';
  
export default class App extends React.Component {
  state = {
    search: '',
    region: null,
    destination: null,
    markers: []

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

  render() {
    const { region, destination ,search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header} /*Header*/> 
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
        </View >
        <MapView style={styles.mapView}
          showsUserLocation
          loadingEnabled
          region={region}
        >
        </MapView>
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
              onPress={() => this.props.navigation.navigate('Explore')}>
              <Icon name="ios-search"  
              style={styles.actionButtonIcon} 
              />
            </ActionButton.Item>

        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
  mapView:{
    flex: 1,
  },
  container:{
    flex: 1,
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
}
)