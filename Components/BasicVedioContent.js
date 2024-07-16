import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native'


export default function BasicVedioContent({ Basicvedio }) {

    const navigation=useNavigation();

    const onPressVedio = (BasicCourseTopics) => {
        navigation.navigate('Basic-play-vedio', { BasicCourseTopicsData: BasicCourseTopics });
      }

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Vedio Content</Text>

      <FlatList 
       style={{marginTop:10}}
       data={Basicvedio?. BasicvedioTopic}

       renderItem={({ item,index }) => (
        <View style={{display:'flex', flexDirection:'row', backgroundColor:'white',marginBottom:7,padding:10,alignItems:'center',borderRadius:5}}>
          <Text style={{fontWeight:'bold',fontSize:20,color:'grey',marginRight:14}}>{index}</Text>

            
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
         {item.BasicvedioTopic || item.name || 'Coming soon..'}</Text>
            
            <TouchableOpacity onPress={()=>onPressVedio(item)}>
          <Ionicons name="play-circle" size={24} style={{}} color={Colors.primary} />
          </TouchableOpacity>

        </View>
      )}
      />
    </View>
  )
}