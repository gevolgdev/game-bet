import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const MyProvider = (props) => {
  const [name, setName] = useState(null)

  const states = {
    name, setName,
  }

  return (
    <MyContext.Provider value={states}>
      {props.children}
    </MyContext.Provider>
  )
}