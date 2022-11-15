import Navigation from "./Components/Navigation";
import Bar from "./Components/Bar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect } from "react";
import { ThemeProvider } from "react-bootstrap";

// import { useDispatch } from "react-redux"

import {onAuthStateChangedListener} from "./Firebase/Config"
// import { setCurrentUser} from "./store/user/action"






function App() {
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if(user) {
  //       dispatch(setCurrentUser(user))
  //     }
  //   })

  //   return unsubscribe
  //  }, [])

  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="md"
>
   <Navigation/>
   </ThemeProvider> 
  
  )

  

}

export default App;
