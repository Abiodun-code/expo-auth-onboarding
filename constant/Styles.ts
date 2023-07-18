import { Platform, StyleSheet } from "react-native";

export const android = Platform.OS === "android"

export const styles = StyleSheet.create({
  SafeArea:{
    paddingTop: android ? 40 : 0,
  }
})