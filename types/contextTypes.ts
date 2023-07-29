export interface loginValue {
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  handleLoginIn: () => void,
  googleSignUp: () => void,
}

export interface childProp {
  children: React.ReactNode
}

export interface signinValue {
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  password: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  handleSignIn: ()=> void
}