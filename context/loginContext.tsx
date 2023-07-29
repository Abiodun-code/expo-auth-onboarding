import React, { createContext, useState } from 'react';
import { loginValue, childProp } from '../types/contextTypes';
import { GoogleAuthProvider, OAuthCredential, UserCredential, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { authentification, provider } from '../constant/firebaseConfig';

export const LoginProvider = createContext({} as loginValue)
 
const LoginContext = ({children}: childProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginIn = () => {
    signInWithEmailAndPassword(authentification, email, password)
      .then((userCredientials: { user: any }) => {
        const user = userCredientials.user;
        setEmail("")
        setPassword("")
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  const googleSignUp = ()=>{
    signInWithRedirect(authentification, provider)
    getRedirectResult(authentification)
      .then((result: UserCredential | null | any) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential: OAuthCredential | null | any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <LoginProvider.Provider value={{ email, setEmail, password, setPassword, loading, setLoading, handleLoginIn, googleSignUp }}>
      {children}
    </LoginProvider.Provider>
  );
}

 
export default LoginContext;