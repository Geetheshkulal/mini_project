
import { View, Text,Image, TouchableOpacity } from 'react-native'
import React ,{useEffect, useState} from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function BasicCourseList() {


    const [BasicvedioList,setBasicVedioList]=useState([])
    
    // when clicking vedio course another page open
    const navigation=useNavigation();

    useEffect(()=>{

        getBasicCourse();

    },[])

    const getBasicCourse = async () => {
      try {
          const resp = (await GlobalApi.getBasicCourse()).data;
  
          const result = resp.data.map((item) => {
              const imageUrl = item.attributes.image?.data[0]?.attributes?.url || '';
              const BasicvedioTopic = item.attributes.BasicCourseTopics.map((topic) => ({
                  id: topic.id,
                  name: topic.name,
                  description: topic.description,
                  vedioUrl: topic.vedioUrl
              }));
  
              return {
                  id: item.id,
                  title: item.attributes.title,
                  desc: item.attributes.description,
                  image: imageUrl,
                  BasicvedioTopic: BasicvedioTopic
              }
          });
  
          setBasicVedioList(result);
          console.log(result);
      } catch (error) {
          console.error(error);
      }
  }
  
     // when clicking vedio course another page will open
    const onPressVedioCourse=(BasicCourseTopics)=>{
    //   // console.log(VedioTopic)
    //   // passing vedioTopic to VedioTopicDta to another page
      navigation.navigate('BasicVedioCourseDetail',{BasicCourseTopicsData:BasicCourseTopics})

    }

  
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20, fontWeight:'bold', marginBottom:3, marginLeft:14}}>Basic Vedio Course</Text>
      <FlatList
      data={BasicvedioList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
      
        <TouchableOpacity onPress={()=>onPressVedioCourse(item)}>

        <Image source={{uri:item.image}} style={{width:200, height:100, marginLeft:16,borderRadius:7}}/>
        <Text style={{marginLeft:16}}>{item.title}</Text>
         </TouchableOpacity>

      )}
      />
    </View>
  )
}


