import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";

const Company = ({company}) => {
    return <View>
        <h3>Company :</h3>
        <Text>bs : {company.bs}</Text>
        <Text>catchPhrase : {company.catchPhrase}</Text>
        <Text>name: {company.name}</Text>
    </View>
};
export default Company;

let styles = StyleSheet.create({});