import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/services/api'
import {chave} from './src/data'
import {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home/Index'
import Search from './src/pages/Search/Index'
import Detalhes from './src/pages/Detail/Index'

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
         name="Home" 
         component={Home}
          options={{headerShown: false}}
          />

          <Stack.Screen
         name="Detalhes" 
         component={Detalhes}
        options={{
          headerStyle: {
          backgroundColor: '#111',
         },
         headerTintColor: '#f7d354'
        }}
        />
        <Stack.Screen
         name="Search" 
         component={Search}
        
          options={{
          headerStyle: {
          backgroundColor: '#111',
         },
         headerTintColor: '#f7d354'
        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
