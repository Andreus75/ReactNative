import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersPageNavigator from "./screens/UsersPageNavigator";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <BottomTabNavigator.Navigator tabBarOption={{tabStyle: {justifyContent: "center", alignItems: "center"}}}>
              <BottomTabNavigator.Screen name={'home'} component={Home}/>
              <BottomTabNavigator.Screen name={'usersPageNavigator'} component={UsersPageNavigator}/>
          </BottomTabNavigator.Navigator>
      </NavigationContainer>
  );
}

let styles = StyleSheet.create({});


