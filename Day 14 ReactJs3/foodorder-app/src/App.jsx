import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import ChangePassword from './components/ChangePaassword'

export const AuthContext=createContext({
    name:'Guest'
})

function App() {

    const [user,setUser] = useState({name:'Guest'})
  return (
    <div>
        <AuthContext.Provider value={{user,setUser}}>
            <Routes>
                <Route index element=<Home/> />
                <Route path='/login' element=<Login/> />
                <Route path='/user/changepasswd' element=<ChangePassword/>  />
            </Routes>
        </AuthContext.Provider>      
    </div>
  )
}

export default App
