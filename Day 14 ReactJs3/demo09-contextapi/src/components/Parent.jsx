import React, { useState } from 'react'
import { createContext } from 'react'
import Child from './Child'

export const CounterContext =createContext(0)

function Parent() {
    const [count,setCount]=useState(0)

  return (
    <div>
      <h3>Parent:{count}</h3>
      <CounterContext.Provider value={{count,setCount}}>
        <Child/>
      </CounterContext.Provider>
    </div>
  )
}

export default Parent
