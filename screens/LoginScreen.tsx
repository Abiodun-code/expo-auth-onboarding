import React, { useEffect } from "react"
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { Colors, styles } from "../constant/Styles"
import { StatusBar } from "expo-status-bar"
import { LoginStack } from "../types/stackParam"
import LoginInput from "../components/loginInput"
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window")

const LoginScreen = ({navigation}: LoginStack) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Title and Description */}
        <SafeAreaView style={styles.SafeArea} className="space-y-2 mx-4">
          <View style={{ width: width, height: height * 0.2 }} className="">
            <LottieView source={require('../assets/animations/login.json')} autoPlay loop />
          </View>
          <Text style={{ color: Colors.black }} className="text-lg font-medium">Enter Your Login Details</Text>
        </SafeAreaView>
        <LoginInput/>
      </ScrollView>
      <StatusBar style={"auto"}/>
    </View>
  )
}

export default LoginScreen