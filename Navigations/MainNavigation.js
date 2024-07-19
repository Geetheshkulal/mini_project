import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import VedioCourseDetails from '../Screens/VedioCourseDetails';
import BasicVedioCourseDetails from '../Screens/BasicVedioCourseDetails';
import PlayVedio from '../Screens/PlayVedio';
import BasicPlayVedio from '../Screens/BasicPlayVedio';
import PythonQuiz from '../Components/PythonQuiz';
import JavaQuiz from '../Components/JavaQuiz';
import CQuiz from '../Components/CQuiz';
import CplusQuiz from '../Components/CplusQuiz';
import JavaScriptQuiz from '../Components/JavaScriptQuiz';
import ReactQuiz from '../Components/ReactQuiz';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="VedioCourseDetail" component={VedioCourseDetails} />
      <Stack.Screen name="play-vedio" component={PlayVedio} />
      <Stack.Screen name='BasicVedioCourseDetail' component={BasicVedioCourseDetails}></Stack.Screen>
      <Stack.Screen name='Basic-play-vedio' component={BasicPlayVedio}></Stack.Screen>
      <Stack.Screen name='PythonQuiz' component={PythonQuiz}></Stack.Screen>
      <Stack.Screen name='JavaQuiz' component={JavaQuiz}></Stack.Screen>
      <Stack.Screen name='CQuiz' component={CQuiz}></Stack.Screen>
      <Stack.Screen name='CplusQuiz' component={CplusQuiz}></Stack.Screen>
      <Stack.Screen name='JavaScriptQuiz' component={JavaScriptQuiz}></Stack.Screen>
      <Stack.Screen name='ReactQuiz' component={ReactQuiz}></Stack.Screen>

    </Stack.Navigator>
  );
}
