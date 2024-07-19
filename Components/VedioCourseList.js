
import { View, Text,Image, TouchableOpacity } from 'react-native'
import React ,{useEffect, useState} from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function VedioCourseList() {


    const [vedioList,setVedioList]=useState([])

    // when clicking vedio course another page open
    const navigation=useNavigation();

    useEffect(()=>{

        getVedioCourse();

    },[])

    const getVedioCourse = async () => {
      try {
          const resp = (await GlobalApi.getVedioCourse()).data;
  
          const result = resp.data.map((item) => {
              const imageUrl = item.attributes.image?.data[0]?.attributes?.url || '';
              const vedioTopic = item.attributes.VedioTopic.map((topic) => ({
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
                  vedioTopic: vedioTopic
              }
          });
  
          setVedioList(result);
          // console.log(result);
      } catch (error) {
          console.error(error);
      }
  }
  
     // when clicking vedio course another page will open
    const onPressVedioCourse=(VedioTopic)=>{
      // console.log(VedioTopic)
      // passing vedioTopic to VedioTopicDta to another page
      navigation.navigate('VedioCourseDetail',{VedioTopicData:VedioTopic})

    }

    // const getVedioCourse=async()=>{

    //     const resp=(await GlobalApi.getVedioCourse()).data;

    //     const result=resp.data.map((item)=>({
    //         id:item.id,
    //         title:attributes.title,
    //         desc:item.attributes.description,
    //         image:item.attributes.image.data.attributes.url,
    //         vedioTopic:item.attributes.VedioTopic
    //     }))

    //     // setVedioList(result);
    //     console.log(result);

    // }
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20, fontWeight:'bold', marginBottom:3, marginLeft:14}}>Advance Course</Text>
      <FlatList
      data={vedioList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>onPressVedioCourse(item)}>
            <Image source={{uri:item.image}} style={{width:200, height:100, marginLeft:16,borderRadius:7}}/>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}




//     return (
//         <View>
//             <Text>VedioCourseList</Text>
//             {vedioList.map((course) => (
//                 <View key={course.id}>
//                     <Text>{course.title}</Text>
//                     <Text>{course.desc}</Text>
//                     {course.image ? (
//                         <Image source={{ uri: course.image }} style={{ width: 100, height: 100 }} />
//                     ) : (
//                         <Text>No Image Available</Text>
//                     )}
//                 </View>
//             ))}
//         </View>
//     )
// }
