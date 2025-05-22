
import React, { useContext } from 'react'
import { themeContex } from './Wrapper'

const Theme_Toggler = () => {
    const [theme, setTheme, btnContent, setBtnContent, btnColor, setBtnColor] = useContext(themeContex)

    const changeTheme = () =>{
        theme == "light" 
        ? (setTheme("dark") , setBtnContent("Light Theme"), setBtnColor("dark")) 
        : ( setTheme("light") , setBtnContent("Dark Theme"), setBtnColor("light"))
    
    }
  return (
    <button className={`${btnColor === "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
    border rounded p-2 `}
  onClick={changeTheme}
  
>
  {btnContent}
</button>

  )
}

export default Theme_Toggler