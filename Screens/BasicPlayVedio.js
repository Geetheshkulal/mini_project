
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

export default function BasicPlayVedio() {

  const navigation = useNavigation();
  const route = useRoute();

  const { BasicCourseTopicsData } = route.params;

  const [BasicvideoUri, setBasicVideoUri] = useState(null);

  useEffect(() => {
    if (BasicCourseTopicsData && BasicCourseTopicsData.vedioUrl) {
      setBasicVideoUri( BasicCourseTopicsData.vedioUrl);
    }
  }, [BasicCourseTopicsData]);

  return (
    <View style={{ padding: 20, marginTop: 25 }}>

       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ marginTop: 10, fontSize: 16, fontWeight:'bold' }}>{BasicCourseTopicsData.name}</Text>

      {BasicvideoUri ? (
       
       <View style={{ marginTop:13, alignItems: 'center' }}>
           <Video
           source={{ uri: BasicvideoUri }}
           style={{ width: 350, height: 200 }}
           useNativeControls 
           resizeMode="contain"
           shouldPlay
         />
        
         <Text style={{ marginTop: 10, fontSize: 14 }}>{BasicCourseTopicsData.description}</Text>
       </View>
     ) : (
       <Text>Loading video...</Text>
     )}
   </View>
 );
}



