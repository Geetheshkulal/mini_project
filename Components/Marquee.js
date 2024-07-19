// marquee.js

import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import python from '../assets/python.png'
import java from '../assets/java.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import figma from '../assets/figma.png'

const { width } = Dimensions.get('window');

export default function Marquee() {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -width,
          duration: 10000, // Duration of one full scroll
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: width,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.marquee, { transform: [{ translateX }] }]}>
      <Ionicons name="logo-react" size={85} color={Colors.Primary} />
      {/* <Ionicons name="logo-python" size={85} color={Colors.Primary} /> */}
      <Image source={python} style={{width:70,height:70}}/>
      <Image source={java} style={{width:70,height:70}}/>
      <Image source={html} style={{width:70,height:70}}/>
      <Image source={css} style={{width:70,height:70}}/>
      <Image source={figma} style={{width:70,height:70}}/>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
   // Set background color to see the marquee clearly
    height: 90, // Adjust height as needed
    justifyContent: 'center',
    marginTop:30
  },
  marquee: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:20
  },

});
