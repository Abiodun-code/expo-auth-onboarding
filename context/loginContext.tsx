import React, { createContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loginValue, childProp } from '../types/contextTypes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentification } from '../constant/firebaseConfig';

export const LoginProvider = createContext({} as loginValue)
 
const LoginContext = ({children}: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginProvider.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </LoginProvider.Provider>
  );
}

 
export default LoginContext;