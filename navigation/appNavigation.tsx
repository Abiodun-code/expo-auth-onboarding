import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { RootStack } from "../types/stackParam"
import HomeScreen from "../screens/HomeScreen"
import OnboardingScreen from "../screens/OnboardingScreen"
import LoginScreen from "../screens/LoginScreen"
import SigninScreen from "../screens/SigninScreen"
import { authentification } from "../constant/firebaseConfig"

const Stack = createNativeStackNavigator<RootStack>()

const AppNavigation = ()=>{

  const [initializer, setInitializer] = useState(true)
  const [user, setUser] = useState()

  // Handle user state change
  const OAuthStateChanged = (user: any)=>{
    setUser(user)
    if (initializer) setInitializer(false)
  }

  useEffect(()=>{
    const subscribe = authentification.onAuthStateChanged(OAuthStateChanged)
    return subscribe
  },[])

  if(initializer) return null

  if (!user){
    return(
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
      </Stack.Navigator>
    )
  }

  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default ()=>{
  return(
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  )
}