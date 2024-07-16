import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import VedioCourseDetails from '../Screens/VedioCourseDetails';
import BasicVedioCourseDetails from '../Screens/BasicVedioCourseDetails';
import PlayVedio from '../Screens/PlayVedio';
import BasicPlayVedio from '../Screens/BasicPlayVedio';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="VedioCourseDetail" component={VedioCourseDetails} />
      <Stack.Screen name="play-vedio" component={PlayVedio} />
      <Stack.Screen name='BasicVedioCourseDetail' component={BasicVedioCourseDetails}></Stack.Screen>
      <Stack.Screen name='Basic-play-vedio' component={BasicPlayVedio}></Stack.Screen>
    </Stack.Navigator>
  );
}
