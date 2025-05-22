
import React, { createContext } from 'react'
import { useState } from 'react'

export const themeContex = createContext(null)

const Wrapper = (props) => {
  const [theme, setTheme] = useState("dark")
  const [btnContent, setBtnContent] = useState("Light Theme")
  const [btnColor, setBtnColor] = useState("light")

  return <themeContex.Provider value={[theme, setTheme, btnContent, setBtnContent, btnColor, setBtnColor]}>
    {props.children}
  </themeContex.Provider>
}

export default Wrapper