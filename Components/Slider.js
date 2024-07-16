


import { View, Text, Dimensions,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from './../Utils/GlobalApi';
import { FlatList } from 'react-native';

export default function Slider() {
    const [slider, setSlider]=useState([])

    useEffect(()=>{
        getSlider();
      // getCategory();
  
    },[])


    const getSlider = async () => {
        try {
          const result = (await GlobalApi.getSlider()).data
        //   console.log(result);

          const resp=result.data.map((item)=>{
            const imageUrl = item.attributes.image.data[0]?.attributes.url;
            return {
             id:item.id,
            name:item.attributes.name,
            image: imageUrl,   //or
            // image:item.attributes.image.data.attributes.url 
            }

          })      
            //   console.log(resp);
          setSlider(resp);

        //   setSlider(result);
          // const result = response.data;
          
        } catch (error) {
          console.error("Error fetching slider data:", error);
        }
      };
    
  return (
    <View style={{marginTop:10}}>

      <FlatList data={slider} 
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      renderItem={({item})=>(
        <View>
            <Image source={{uri:item.image}} style={{width:Dimensions.get('screen').width*0.87,height:150,borderRadius:10,marginLeft:18}}/>
        </View>

      )}
      />
    </View>
  )
}