import { Platform, StyleSheet } from "react-native";

export const android = Platform.OS === "android"

export const styles = StyleSheet.create({
  SafeArea:{
    paddingTop: android ? 40 : 0,
  }
})

export const Colors = {
  white: "#fff",
  black: "#000",
  blue: "#5d5fee",
  grey: "#babbc3",
  light: "#f3f4fb",
  darkBlue: "#7978b5",
}