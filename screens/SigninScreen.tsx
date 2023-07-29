import React, { useEffect } from "react"
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity, Dimensions } from "react-native"
import { Colors, styles } from "../constant/Styles"
import { StatusBar } from "expo-status-bar"
import { SigninStack } from "../types/stackParam"
import LottieView from "lottie-react-native";
import SigninInput from "../components/signinInput"

const { width, height } = Dimensions.get("window")

const SigninScreen = ({ navigation, route }: SigninStack) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Title and Description */}
        <SafeAreaView style={styles.SafeArea} className="space-y-2 mx-4">
          <View style={{ width: width, height: height * 0.2 }} className="">
            <LottieView source={require('../assets/animations/register.json')} autoPlay loop />
          </View>
          <Text style={{ color: Colors.black }} className="text-lg font-medium">Enter Your Details to Sign up</Text>
        </SafeAreaView>
        <SigninInput navigation={navigation} route={route} />
      </ScrollView>
      <StatusBar style={"dark"} />
    </View>
  )
}

export default SigninScreen