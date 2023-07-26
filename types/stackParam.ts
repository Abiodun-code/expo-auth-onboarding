import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStack = {
  Home: undefined,
  Onboarding: undefined,
  Login: undefined,
  Signin: undefined
}

export type HomeStack = NativeStackScreenProps<RootStack, "Home">

export type OnboardingStack = NativeStackScreenProps<RootStack, "Onboarding">

export type LoginStack = NativeStackScreenProps<RootStack, "Login">

export type SigninStack = NativeStackScreenProps<RootStack, "Signin">