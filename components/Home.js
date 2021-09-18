import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Company from "./Company";
import About from "./About";
import Car from "./Car";

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Car" component={Car} />
    </Drawer.Navigator>
);
};
export default Home;

let styles = StyleSheet.create({});