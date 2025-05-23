

import { createContext } from "react"
import { useState } from "react"

export const themeContex = createContext(null)
export const recipesContext = createContext(null);

const RecipeContext = (props) => {

    const [theme, setTheme] = useState("dark")
    const [btnContent, setBtnContent] = useState("Light Theme")

    const [data, setData] = useState([])
    // console.log(data);
  return (
    <themeContex.Provider value={[theme, setTheme, btnContent, setBtnContent]}>
       <recipesContext.Provider value={ {data, setData} }>
        {props.children}
        </recipesContext.Provider>
    </themeContex.Provider>
  )
}

export default RecipeContext