import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {translate} from "../translations/config/i18nConfig";
import Theme from '../constants/Theme';

import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    marginTop: 30,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginVertical: 20,
                }
            }
            >
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/img/icon.jpg')}
                />

                <Text style={styles.welcome}>
                    <Text style={styles.welcome}>
                        {translate('SignUpText')}
                        {'\n'}
                    </Text>
                </Text>




            </View>
        );
    };
};


const styles = StyleSheet.create({

    tinyLogo: {
        width: 90,
        height: 90,
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 25,
        color: Theme.COLORS.BLACK,
    },


});