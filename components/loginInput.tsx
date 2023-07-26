import React, { useContext } from "react"
import { View, Text, TouchableOpacity, TextInput, Dimensions } from "react-native"
import { Colors } from "../constant/Styles"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { LoginProvider } from "../context/loginContext"
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window")

const LoginInput = () => {
  const { setPassword, password, email, setEmail } = useContext(LoginProvider)
  return (
    <View className="flex-col mx-4">
      <View className="space-y-2 mt-5">
        <Text className="text-lg" style={{color: Colors.blue}}>Email</Text>
        <TouchableOpacity activeOpacity={0.9} className="border flex-row p-3 border-1 items-center" style={{borderColor: Colors.grey, backgroundColor: Colors.light}}>
          <MaterialCommunityIcons name="email-outline" size={20} style={{ color: Colors.darkBlue }} />
          <TextInput
            className="flex-1 ml-2 text-sm"
            placeholder="Enter Your Email"
            autoCorrect={true}
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />
        </TouchableOpacity>
      </View>
      <View className="space-y-2 mt-5">
        <Text className="text-lg" style={{ color: Colors.blue }}>Password</Text>
        <TouchableOpacity activeOpacity={0.9} className="border flex-row p-3 items-center" style={{ borderColor: Colors.grey, backgroundColor: Colors.light }}>
          <MaterialIcons name="person-outline" size={20} style={{ color: Colors.darkBlue }} />
          <TextInput
            className="flex-1 ml-2 text-sm"
            placeholder="Enter Your Password"
            autoCorrect={true}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </TouchableOpacity>
      </View>
      <View className="mt-5 ">
        <Text className="text-sm text-center" style={{ color: Colors.darkBlue }}>Or login with</Text>
        <View>
          <LottieView source={require('../assets/animations/first.json')} autoPlay loop />
        </View>
      </View>
    </View>
  )
}

export default LoginInput