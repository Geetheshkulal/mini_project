

import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors  from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native'

export default function VedioContent({ vedio }) {

  const navigation=useNavigation();

  const onPressVedio = (VedioTopic) => {
    navigation.navigate('play-vedio', { VedioTopicData: VedioTopic });
  }
  

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Vedio Content</Text>

      <FlatList
      style={{marginTop:10}}
        data={vedio?.vedioTopic} //main
        // keyExtractor={(item) => item.id.toString()}

        renderItem={({ item, index }) => (
  <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', marginBottom: 7, padding: 10, alignItems: 'center', borderRadius: 5 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'grey', marginRight: 14 }}>{index}</Text>
    
    <Text style={{ fontSize: 15, fontWeight: 'bold', flex: 1 }}>
      {item.vedioTopic || item.name || 'Coming soon..'}
    </Text>
    
    <TouchableOpacity onPress={() => onPressVedio(item)}>
      <View style={{ 
        flexDirection: 'row', 
        backgroundColor: 'white', 
        padding: 10, 
        alignItems: 'center', 
        borderRadius: 5 
      }}>
        <Ionicons name="play-circle" size={24} style={{ marginLeft: 'auto' }}   color={Colors.Primary} />
      </View>
    </TouchableOpacity>
  </View>
)}


      />
    </View>
  );
}




// import { View, Text, FlatList } from 'react-native'
// import React from 'react'


// // to display the content part progress
// export default function VedioContent({vedio}) {
//   return (
//     <View style={{marginTop:10}}>
//       <Text style={{fontWeight:'bold',fontSize:16}}>Vedio Content</Text>

//       <FlatList
//     data={vedio?.VedioTopic}
//     renderItem={({item})=>(
//       <View>
//         <Text>{item.name}</Text>
//       </View>

//       )}
//       />
//     </View>
//   )
// }
