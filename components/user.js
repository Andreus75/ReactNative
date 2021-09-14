import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {
    return <View style={[styles.userBox, styles.margins]}>
        <Text style={[styles.userBox]}>{item.name}</Text>
    </View>
};
export default User;

const styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        textAlign: 'center',
        width: '70%',
        height: 100
    },
    margins: {
        marginBottom: 5
    }
});