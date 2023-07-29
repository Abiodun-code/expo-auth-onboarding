import React, { createContext, useState } from 'react';
import { childProp, signinValue } from '../types/contextTypes';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authentification } from '../constant/firebaseConfig';

export const SigninProvider = createContext({} as signinValue)

const SigninContext = ({ children }: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
    createUserWithEmailAndPassword(authentification, email, password)
      .then((userCredientials: { user: any }) => {
        const user = userCredientials.user;
        setEmail("")
        setPassword("")
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  return (
    <SigninProvider.Provider value={{ email, setEmail, password, setPassword, loading, setLoading, handleSignIn }}>
      {children}
    </SigninProvider.Provider>
  );
}


export default SigninContext;