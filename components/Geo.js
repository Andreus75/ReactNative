import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";

const Geo = ({geo}) => {
    let {lat, lng} = geo;
    return <View>
        <h3>Geo :</h3>
        <Text>lat : {lat}</Text>
        <Text>lng : {lng}</Text>
    </View>
};
export default Geo;

let styles = StyleSheet.create({});