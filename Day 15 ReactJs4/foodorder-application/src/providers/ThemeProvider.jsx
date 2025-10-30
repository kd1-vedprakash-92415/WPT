import { createContext, useContext, useState } from "react";


export const ThemeContext= createContext({theme:'lightblue'})

function ThemeProvider(props){
    const [theme,setTheme]=useState('lightblue')
    return <ThemeContext.Provider value={{theme,setTheme}}>
        <div style={{backgroundColor:theme,padding:'10px'}}>
            {props.children}
        </div>
    </ThemeContext.Provider>
}

export default ThemeProvider

export function useTheme(){
    return useContext(ThemeContext)
}