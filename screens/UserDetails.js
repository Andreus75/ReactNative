import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";
import Address from "../components/Address";
import Company from "../components/Company";

const UserDetail = (props) => {
    let {route:{params:{data}}, navigation} = props;
    return <View>
        <Text>{data.name}</Text>
        <Text>email : {data.email}</Text>
        <Text>phone : {data.phone}</Text>
        <Text>username : {data.username}</Text>
        <Text>website : {data.website}</Text>
        <Text><Address address={data.address}/></Text>
        <Text><Company company={data.company}/></Text>
    </View>
};
export default UserDetail;

let styles = StyleSheet.create({});