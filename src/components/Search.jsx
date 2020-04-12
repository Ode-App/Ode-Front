import React, { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default class Search extends Component {
    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={4}
                placeholderTextColor="#333"
                currentLocation={true} 
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch'
                /*query={{
                    key: 'xxxxxxx',
                    language: 'es'
                }}*/
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 40 }),
                        width: '100%'
                    },
                    textInputContainer: {
                        marginHorizontal: 10,
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        borderTopWidth: 0,
                        borderBottomWidth: 0

                    },
                    textInput: {
                        height: 50,
                        margin: 0,
                        padding: 0,
                        borderRadius: 9,
                        elevation: 5, // Shadow android
                        shadowColor: '#000000', // Shadow ios
                        shadowOpacity: 0.1, // Shadow ios
                        shadowOffset: { x: 0, y: 0 }, // Shadow ios
                        shadowRadius: 15,  // Shadow ios
                        borderWidth: 1,
                        borderColor: "#FAFAFA",
                        fontSize: 18
                    },
                    listView: {
                        marginHorizontal: 20,
                        borderWidth: 1,
                        borderColor: "#FAFAFA",
                        backgroundColor: '#ffffff',
                        elevation: 5,
                        shadowColor: '#000000', // Shadow ios
                        shadowOpacity: 0.1, // Shadow ios
                        shadowOffset: { x: 0, y: 0 }, // Shadow ios
                        shadowRadius: 15,  // Shadow ios
                        marginTop: 15
                    },
                    description: {
                        fontSize: 15
                    },
                    row: {
                        padding: 18,
                        height: 58
                    }
                }}

            />
        )
    }
}