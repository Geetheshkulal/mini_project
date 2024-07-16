
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

import VedioContent from '../Components/VedioContent';

import { useNavigation } from '@react-navigation/native';

export default function VedioCourseDetails() {
  const route = useRoute();
  const { VedioTopicData } = route.params;
  const [vedio, setVedio] = useState({}); //state; save object in one 

  const navigation=useNavigation();

  useEffect(() => {
    setVedio(VedioTopicData);
  }, [VedioTopicData]);

  return (
    <View style={{ padding: 20, paddingTop: 35 }}>
      
      {/* // go back */}
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      

      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>{vedio.title}</Text>
        <Text style={{ color: 'blue' }}>By CodeBox</Text>

        <Image source={{ uri: vedio.image }} style={{ height: 150, marginTop: 10, borderRadius: 10 }} />

        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>About course</Text>
        <Text style={{ color: 'grey' }}>{vedio.desc}</Text>
      </View>

      <VedioContent vedio={vedio} />
    </View>
  );
}



// import { View, Text,Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useRoute } from '@react-navigation/native'
// import { Ionicons } from '@expo/vector-icons';
// import Colors from '../Utils/Colors';
// import VedioContent from '../Components/VedioContent';

// export default function VedioCourseDetails() {
//   const param=useRoute().params;
//   const [vedio,setVedio]=useState([]) //state; save object in one 

//   useEffect(()=>{
  
//     // console.log(param.VedioTopicData)
//        setVedio(param.VedioTopicData)
//   })

//   return (
//     <View style={{padding:20,paddingTop:35}}>
//       {/* <Text>Vedio CourseDetails</Text> */}
//       <Ionicons name="arrow-back-sharp" size={24} color="black" />

//       <View>
//         <Text style={{fontSize:20,fontWeight:'bold',marginTop:5}}>{vedio.title}</Text>
//         <Text style={{color:'blue'}}>By CodeBox</Text>

//         <Image source={{uri:vedio.image}} style={{height:150,marginTop:10,borderRadius:10}}></Image>
//         <Text style={{marginTop:10,fontWeight:'bold',fontSize:16}}>About course</Text>
//         {/* numberOflines{3} for minimizing lines */}
//         <Text style={{color:'grey'}}>{vedio.desc}</Text>  

//       </View>

//       <VedioContent vedio={vedio} />

//     </View>
//   )
// }

