import React from 'react';
import {  StyleSheet } from 'react-native';
import Hangman from './Screens/Hangman';
import Rules from './Screens/Rules';
import Home from './Screens/Home.js'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Hangman" component={Hangman}/>
            <Stack.Screen name="Rules" component={Rules}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

