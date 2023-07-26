import React from "react"
import { View, Text } from "react-native"
import { authentification } from "../constant/firebaseConfig"

const HomeScreen = () => {
  return (
    <View>
      <Text>{authentification.currentUser?.email}</Text>
    </View>
  )
}

export default HomeScreen