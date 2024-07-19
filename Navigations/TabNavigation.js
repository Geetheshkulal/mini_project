// import { View, Text } from 'react-native'
// import React from 'react'
// import HomeScreen from './../Screens/Home';
// import MyCourseScreen from './../Screens/Mycourse';
// import ProfileScreen from './../Screens/Mycourse';
// import { Ionicons } from '@expo/vector-icons';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Colors from '../Utils/Colors';

// const Tab = createBottomTabNavigator();

// export default function TabNavigation() {
//   return (
//     <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.primary}}>
      
//         <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:({color, size})=>(<Ionicons name="home-sharp" size={22} color={color} />),tabBarLabel:(color)=>(<Text style={{color:color}}>Home</Text>)}}/>
//         <Tab.Screen name='MyCourse' component={MyCourseScreen}options={{tabBarIcon:({color, size})=>(<Ionicons name="book-sharp" size={22} color={color} />),tabBarLabel:({color})=>(<Text style={{color:color}}>MyCourse</Text>)}}/>
//         <Tab.Screen name='Profile' component={ProfileScreen} options={{tabBarIcon:({color, size})=>(<Ionicons name="person-sharp" size={22} color={color} />),tabBarLabel:({color})=>(<Text style={{color:color}}>Profile</Text>)}}/>

//     </Tab.Navigator>
//   )
// }


import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './../Screens/Home';
import MyCourseScreen from './../Screens/Mycourse';
import ChatBot from '../Screens/ChatBot';
import ProfileScreen from './../Screens/ProfileScreen';
import Quiz from '../Screens/Quiz';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary }}>
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="home-sharp" size={22} color={color} />),
          tabBarLabel: ({ color }) => (<Text style={{ color: color }}>Home</Text>)
        }} 
      />
      <Tab.Screen 
        name='MyCourse' 
        component={ChatBot} 
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="chatbox" size={22} color={color}/>),
          tabBarLabel: ({ color }) => (<Text style={{ color: color }}>Chat Bot</Text>)
        }} 
      />

    <Tab.Screen 
        name='Quiz' 
        component={Quiz} 
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="quiz" size={22} color={color} />),
          tabBarLabel: ({ color }) => (<Text style={{ color: color }}>Quiz</Text>)
        }} 
      />

      <Tab.Screen 
        name='ProfileScreen' 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (<Ionicons name="person-sharp" size={22} color={color} />),
          tabBarLabel: ({ color }) => (<Text style={{ color: color }}>Profile</Text>)
        }} 
      />

       
    </Tab.Navigator>
  );
}
