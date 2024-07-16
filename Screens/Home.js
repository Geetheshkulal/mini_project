import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './../Components/Header';
import Slider from '../Components/Slider';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import VedioCourseList from '../Components/VedioCourseList';
import BasicCourseList from '../Components/BasicCourseList';
import { ScrollView } from 'react-native-web';

export default function Home() {

  // // get category list
  // const getCategory=()=>{
  //   GlobalApi.getCategory().then(res=>{
  //     console.log(res)

  //   })

  // }; 

  return (

     <View style={{ height:200}}>
      <Header/>
      <Slider/>
      <VedioCourseList/>
      <BasicCourseList/>
    
     
    </View>

  )
}


