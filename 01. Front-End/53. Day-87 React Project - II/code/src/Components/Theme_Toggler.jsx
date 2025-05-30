
import { useContext } from "react"
import {themeContex} from "../context/RecipeContext"

const Theme_Toggler = () => {
    const [theme, setTheme, btnContent, setBtnContent] = useContext(themeContex)

    const changeTheme = () =>{
        theme == "dark" ? (setTheme("white"), setBtnContent("Dark Theme")) : (setTheme("dark") , setBtnContent("Light Theme"))
    }
  return (
    <>
  <button onClick={changeTheme} className='py-3 px-3 border rounded'>{btnContent}</button>
  </>
  )
}

export default Theme_Toggler