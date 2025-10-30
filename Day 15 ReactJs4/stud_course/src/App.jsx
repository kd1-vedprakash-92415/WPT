
import { createContext, useState } from 'react';
import { UserContext } from './App';
import { Route, Routes } from 'react-router';
import Login from './../../foodorder-application/src/components/Login';
import Register from './components/Register';

export const UserContext= createContext({})
function App() {
    const [user,setUser]=useState(null)

  return (
    <div>
        <UserContext.Provider value={{user,setUser}}>
            <Routes>
                <Route index element=<Login/> />
                <Route path="/register" element=<Register/> />
            </Routes>
        </UserContext.Provider>
             
    </div>
  )
}

export default App
