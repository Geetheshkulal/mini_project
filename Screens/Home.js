import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Header from './../Components/Header';
import GlobalApi from '../Utils/GlobalApi';

export default function Home() {

  useEffect(()=>{
    getCategory();

  },[])

  // get category list
  const getCategory=()=>{
    GlobalApi.getCategory().then(res=>{
      console.log(res.categories)

    })

  };

  return (
     <View>
      <Header/>
     
    </View>
  )
}