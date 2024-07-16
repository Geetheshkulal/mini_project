import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import VedioCourseDetails from '../Screens/VedioCourseDetails';
import BasicVedioCourseDetails from '../Screens/BasicVedioCourseDetails';
import PlayVedio from '../Screens/PlayVedio';
import BasicPlayVedio from '../Screens/BasicPlayVedio';

const Stack=createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="home" component={Home}></Stack.Screen>
        <Stack.Screen name="VedioCourseDetail" component={VedioCourseDetails}></Stack.Screen>
        <Stack.Screen name="play-vedio" component={PlayVedio}></Stack.Screen>
        <Stack.Screen name='BasicVedioCourseDetail' component={BasicVedioCourseDetails}></Stack.Screen>
        <Stack.Screen name='Basic-play-vedio' component={BasicPlayVedio}></Stack.Screen>
        
    </Stack.Navigator>
  )
}