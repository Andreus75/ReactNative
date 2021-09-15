import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";
import Geo from "./Geo";

const Address = ({address}) => {
    let {city, street, suite, zipcode, geo} = address;
    return <View>
        <h3>Address :</h3>
        <Text>city : {city}</Text>
        <Text>street : {street}</Text>
        <Text>suite : {suite}</Text>
        <Text>zipcode : {zipcode}</Text>
        <Text><Geo geo={geo}/></Text>
    </View>
};

export default Address;

let styles = StyleSheet.create({});