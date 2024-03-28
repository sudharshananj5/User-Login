import React, { useState } from 'react'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import { userContext } from './Components/Signup/Signup';

export const App = () => {
  const [userData,setUserData] = useState([])
  return (
  <div>
    <userContext.Provider value={{userData,setUserData}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </userContext.Provider>
    
  </div>
   
  )
}
export default App