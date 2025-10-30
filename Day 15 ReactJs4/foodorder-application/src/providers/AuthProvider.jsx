import { createContext, useContext, useState } from "react";

export const AuthContext= createContext({})
function AuthProvider(props){
    const [user,setUser] =useState()
    return <AuthContext.Provider value={{user,setUser}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider

export function useAuth(){
    const auth =useContext(AuthContext)
    return auth
}