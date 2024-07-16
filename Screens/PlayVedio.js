


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';

export default function PlayVedio() {
  const navigation = useNavigation();
  const route = useRoute();
  const { VedioTopicData } = route.params;

  const [videoUri, setVideoUri] = useState(null);

  useEffect(() => {
    if (VedioTopicData && VedioTopicData.vedioUrl) {
      setVideoUri(VedioTopicData.vedioUrl);
    }
  }, [VedioTopicData]);

  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
        
      <Text style={{ marginTop: 10, fontSize: 16, fontWeight:'bold' }}>{VedioTopicData.name}</Text>
      {videoUri ? (
       
        <View style={{ marginTop:13, alignItems: 'center' }}>
            <Video
            source={{ uri: videoUri }}
            style={{ width: 350, height: 200 }}
            useNativeControls 
            resizeMode="contain"
            shouldPlay
          />
         
          <Text style={{ marginTop: 10, fontSize: 14 }}>{VedioTopicData.description}</Text>
        </View>
      ) : (
        <Text>Loading video...</Text>
      )}
    </View>
  );
}


// import { View, Text,TouchableOpacity, Alert } from 'react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function PlayVedio() {

//    const navigation=useNavigation();

//   const route = useRoute();
//   const { VedioTopicData } = route.params;

//   const [vedioChapter,setVedioChapter]=useState([])
//   const [playing,setPlaying]=useState(false);

//   useEffect(()=>{
//     setVedioChapter(VedioTopicData);
//   },[VedioTopicData]);

//   const onStateChange=useCallback((state)=>{
//     if(state=='ended'){
//       setPlaying(false);

//     }
//   })
//   return (
//     <View style={{padding:20,marginTop:25}}>

//      <TouchableOpacity onPress={()=>navigation.goBack()}>
//       <Ionicons name="arrow-back-sharp" size={24} color="black" />
//       </TouchableOpacity>

//         {vedioChapter?
//         <View>
//             <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{vedioChapter.name}</Text>

//             <YoutubePlayer
//             height={220}
//             play={playing}
//             vedioId={vedioChapter.vedioUrl}
//             onChangeState={onStateChange}
//             />

//             <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
//             <Text style={{lineHeight:20}}>{vedioChapter.description}</Text>
//         </View>

//            :null }

//     </View>
//   );
// }


