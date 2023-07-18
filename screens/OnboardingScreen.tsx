import React, { useEffect } from "react"
import { SafeAreaView, View, Text, Image, Dimensions } from "react-native"
import Onboarding from 'react-native-onboarding-swiper';
import { styles } from "../constant/Styles";
import { OnboardingStack } from "../types/stackParam";
import { StatusBar } from "expo-status-bar";
import LottieView  from "lottie-react-native";

const {width, height} = Dimensions.get("window")

const OnboardingScreen = ({ navigation }: OnboardingStack) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <SafeAreaView className="flex-1">
      <Onboarding
        onDone={()=> navigation.navigate("Home")}
        onSkip={()=> navigation.navigate("Home")}
        bottomBarHighlight = {false}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={{width: width, height: height*0.6}}>
                <LottieView source={require('../assets/animations/second.json')} autoPlay loop />
              </View>
            ),
            title: 'Explore',
            subtitle: 'Discover new features and functionalities.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={{ width: width, height: height * 0.6 }}>
                <LottieView source={require('../assets/animations/first.json')} autoPlay loop />
              </View>
            ),
            title: 'Explore',
            subtitle: 'Discover new features and functionalities.',
          },
        ]}
      />
      <StatusBar style={"auto"} />
    </SafeAreaView>
  )
}

export default OnboardingScreen