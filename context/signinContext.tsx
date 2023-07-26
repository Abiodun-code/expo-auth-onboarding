import React, { createContext, useState } from 'react';
import { childProp, signinValue } from '../types/contextTypes';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authentification } from '../constant/firebaseConfig';

export const SigninProvider = createContext({} as signinValue)

const SigninContext = ({ children }: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SigninProvider.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </SigninProvider.Provider>
  );
}


export default SigninContext;