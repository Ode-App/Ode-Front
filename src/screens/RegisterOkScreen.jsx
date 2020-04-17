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
                        {translate('SingUpDone')}
                        {'\n'}
                    </Text>
                </Text>


                 <Icon name="check" size={32} color="green"  style={styles.checkIcon}>

                </Icon>

                <TouchableOpacity
                    title="Back home"
                    style={styles.btn_confirm}
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text textAnchor="middle" style={styles.btn_text}>{translate('BackHome')}</Text>

                </TouchableOpacity>

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
    checkIcon: {
        top: -100,
        left: 5,
    },
    btn_confirm: {
        backgroundColor: Theme.COLORS.BACKGROUND,
        borderColor: 'black',
        borderWidth: .3,
        borderRadius: 10,

        width: 200,
        height: 50

    },
    btn_text: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        color: Theme.COLORS.WHITE,
        textAlignVertical: "center"
    },



});