import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/appNavigation';
import BorderContext from './context/loginContext';
import LoginContext from './context/loginContext';
import SigninContext from './context/signinContext';

const App = ()=> {
  return (
    <AppNavigation/>
  );
}

export default ()=>{
  return(
    <SigninContext>
      <LoginContext>
      <App/>
    </LoginContext>
    </SigninContext>
    
  )
}