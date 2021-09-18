import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = (props) => {

    let {item, nav: {navigate}} = props;
    let onPress = () => {
        navigate('userDetails', {data: item});
    }

    return <View style={[styles.userBox, styles.margins]}>
        <Text style={[styles.userBox]}>{item.name}</Text>
        <Button title={'UserDetails'} onPress={onPress}/>
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