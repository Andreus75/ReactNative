import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/users";

export default function App() {
  return (
    <View>
        <StatusBar style="auto" />
      <Users/>
    </View>
  );
}


