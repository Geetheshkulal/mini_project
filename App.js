import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from "expo-router";
import { ClerkProvider,SignedIn,SignedOut } from "@clerk/clerk-expo";
import TabNavigation from './Navigations/TabNavigation';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './Screens/LoginScreen';
import HomeNavigation from './Navigations/HomeNavigation';
import MainNavigation from './Navigations/MainNavigation';



export default function App() {
  return (
 
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>

      <NavigationContainer>
        <MainNavigation/>
        {/* <TabNavigation/>  */}
        {/* <HomeNavigation/>   */}
     </NavigationContainer>
    
     
      </SignedIn> 

     <SignedOut>
    <LoginScreen/>
     </SignedOut>

    </ClerkProvider>
      
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
