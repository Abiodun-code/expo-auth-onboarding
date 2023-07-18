import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStack = {
  Home: undefined,
  Onboarding: undefined
}

export type HomeStack = NativeStackScreenProps<RootStack, "Home">

export type OnboardingStack = NativeStackScreenProps<RootStack, "Onboarding">