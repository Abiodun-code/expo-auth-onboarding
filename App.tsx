import { StatusBar } from 'expo-status-bar';
import AppNavigation from './navigation/appNavigation';
import BorderContext from './context/loginContext';
import LoginContext from './context/loginContext';

const App = ()=> {
  return (
    <AppNavigation/>
  );
}

export default ()=>{
  return(
    <LoginContext>
      <App/>
    </LoginContext>
  )
}