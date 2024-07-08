

import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React from 'react'
import {useWarmUpBrowser} from '../hooks/useWarmUpBrowser';
import {useOAuth}  from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import Colors from './../Utils/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);

  return (
    <View style={styles.container}>
     <Image source={require('./../assets/login.png')} style={styles.image} />
     <View style={styles.textContainer}>
     <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
     <Text style={styles.loginText}>Login/Signup</Text>

      <TouchableOpacity  style={styles.button} onPress={onPress}>
      <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
      <Text style={{ color: Colors.white }}>Sign In with Google</Text>
      </TouchableOpacity>
    
    </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 90,
  },
  textContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 80,
    fontSize: 25,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  userInfoText: {
    fontSize: 16,
    color: Colors.primary,
  },
});


// import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Colors from '../Utils/Colors'
// import { Ionicons } from '@expo/vector-icons';
// import {client} from './../Utils/KindConfig';
// import * as WebBrowser from "expo-web-browser";

// export default function LoginScreen() {

//   const handleSignUp = async () => {
//     const token = await client.register();
//     if (token) {
//   console.log("authenticated")
//     }
//   };
  
//   const handleSignIn = async () => {
//     const token = await  client.login();
//     if (token) {
//       console.log("authencated")
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('./../assets/images/login.png')} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
//         <Text style={styles.loginText}>Login/Signup</Text>
//         <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//           <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
//           <Text style={{ color: Colors.white }}>Sign In with Google</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={{marginTop:10}}>
//           <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
//           <Text style={{ color: Colors.white }}>Create a new account</Text>
//         </TouchableOpacity>
//       </View>
    
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     marginTop: 90,
//   },
//   textContainer: {
//     paddingTop: 30,
//     paddingHorizontal: 20,
//     marginTop: 20,
//     backgroundColor: '#fff',
//     borderTopRightRadius: 20,
//     borderTopLeftRadius: 20,
//   },
//   welcomeText: {
//     fontSize: 20,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   loginText: {
//     textAlign: 'center',
//     marginTop: 80,
//     fontSize: 25,
//   },
//   button: {
//     backgroundColor: Colors.primary,
//     padding: 10,
//     margin: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   userInfo: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   userInfoText: {
//     fontSize: 16,
//     color: Colors.primary,
//   },
// });







