import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/Home";
import {createStackNavigator} from "@react-navigation/stack";
import UserDetail from "./screens/UserDetails";

let StackNavigator = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <StackNavigator.Navigator>
              <StackNavigator.Screen name={'Users'} component={Users}/>
              <StackNavigator.Screen name={'Home'} component={Home}/>
              <StackNavigator.Screen name={'UserDetail'} component={UserDetail}/>
          </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

let styles = StyleSheet.create({});


