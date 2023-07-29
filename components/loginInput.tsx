import React, { useContext, useEffect } from "react"
import { View, Text, TouchableOpacity, TextInput, Dimensions } from "react-native"
import { Colors } from "../constant/Styles"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { LoginProvider } from "../context/loginContext"
import LottieView from "lottie-react-native";
import { LoginStack } from "../types/stackParam"
import { authentification } from "../constant/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

const { width, height } = Dimensions.get("window")

const LoginInput = ({ navigation, route }: LoginStack) => {

  const { setPassword, password, email, setEmail, handleLoginIn, googleSignUp } = useContext(LoginProvider)
  
  return (
    <View className="flex-col mx-4">
      {/* email design  */}
      <View className="space-y-2 mt-5">
        <Text className="text-lg" style={{ color: Colors.blue }}>Email</Text>
        <TouchableOpacity activeOpacity={0.9} className="border flex-row p-3 border-1 items-center" style={{ borderColor: Colors.grey, backgroundColor: Colors.light }}>
          <MaterialCommunityIcons name="email-outline" size={20} style={{ color: Colors.darkBlue }} />
          <TextInput
            className="flex-1 ml-2 text-sm"
            placeholder="Enter Your Email"
            autoCorrect={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </TouchableOpacity>
      </View>
      {/* password design */}
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
      {/* button design */}
      <View className="mt-5">
        <TouchableOpacity activeOpacity={0.9} className="border p-3" 
          onPress={handleLoginIn}
          style={{ borderColor: Colors.grey, backgroundColor: Colors.blue }}
        >
          <Text className="text-lg text-center" style={{ color: Colors.light }}>Log In</Text>
        </TouchableOpacity>
      </View>
      {/* google design */}
      <View className="mt-5">
        <Text className="text-sm text-center" style={{ color: Colors.darkBlue }}>Or login with</Text>
        <TouchableOpacity activeOpacity={0.9}
          className="items-center border flex-row justify-center py-2 mt-3"
          onPress={() => googleSignUp()}
          style={{ width: width * 0.9, height: height * 0.09, borderColor: Colors.grey, backgroundColor: Colors.light }}
        >
          <LottieView source={require('../assets/animations/google.json')} autoPlay loop />
        </TouchableOpacity>
        <View className="flex-row items-center justify-center mt-3 space-x-2">
          <Text className="text-sm">You dont have an account</Text>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Signin")}>
            <Text className="text-sm" style={{ color: Colors.darkBlue }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginInput