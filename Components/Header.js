
import { View, Text,Image, TextInput,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';

export default function Header() {
    const {user}=useUser();
  return (
    <>
    <View style={{marginTop:25,padding:20}}>
     <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
       <Image source={{uri:user?.imageUrl}} style={{width:45,height:45, borderRadius:99}}/>

       <View>
        <Text style={{fontSize:18,fontFamily:'outfit'}}>welcome,</Text>
     <Text style={{fontSize:20, fontFamily:'outfit-bold',color:Colors.Primary}}>{user?.fullName}</Text>
       </View>
      </View>
    </View>


    <View style={styles.input}>
    <Ionicons name="search" size={24} color={Colors.grey} />
        <TextInput placeholder='search' style={{fontFamily:'outfit',width:'100%'}}/>
    </View>

    </>

  )
}
const styles=StyleSheet.create(
    {
        input:{
            backgroundColor:'#fff',
            padding:10,
           borderRadius:99,
           paddingHorizontal:30,
           marginTop:15,
           display:'flex',
           flexDirection:'row',
           gap:12,
           alignItems:'center',
           borderWidth:0.45,
           borderColor:Colors.primary,
           margin:10
      }
    }
)





// import { View, Text,Image } from 'react-native'
// import React from 'react'
// import { useUser } from '@clerk/clerk-expo'

// export default function Header() {

//   const {user}=useUser();

//   return (
//     <View style={{padding:20, paddingTop:50}}>
//      <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10}}>
//       <Image source={{uri:user?.imageUrl}} style={{width:45,height:45, borderRadius:99}}/>

//       <View>
//         <Text>welcome</Text>
//         <Text style={{fontSize:19, fontFamily:'outfit-medium'}}>{user?.fullName}</Text>
//       </View>
//      </View>
//  </View>
//   )
// }