import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { View, Text } from "react-native"
import { RootStack } from "../types/stackParam"
import HomeScreen from "../screens/HomeScreen"
import OnboardingScreen from "../screens/OnboardingScreen"

const Stack = createNativeStackNavigator<RootStack>()

const AppNavigation = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation