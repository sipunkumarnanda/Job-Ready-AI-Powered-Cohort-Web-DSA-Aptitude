

import { createContext, useEffect } from "react"
import { useState } from "react"

export const themeContex = createContext(null)
export const recipesContext = createContext(null);

const RecipeContext = (props) => {

    const [theme, setTheme] = useState("dark")
    const [btnContent, setBtnContent] = useState("Light Theme")
    const [data, setData] = useState([])

    useEffect(()=>{
      setData(JSON.parse(localStorage.getItem("recipes", )) || [])
    }, [])
  return (
    <themeContex.Provider value={[theme, setTheme, btnContent, setBtnContent]}>
       <recipesContext.Provider value={ {data, setData} }>
        {props.children}
        </recipesContext.Provider>
    </themeContex.Provider>
  )
}

export default RecipeContext



// {
//     "id": 1,
//     "image": "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-9.jpg",
//     "title": "Spaghetti Carbonara",
//     "category": "Italian Pasta",
//     "chef": "Gordon Ramsay",
//     "ingredients": "Spaghetti, eggs, Parmesan cheese, pancetta, black pepper, salt",
//     "instruction": "Boil pasta. Cook pancetta until crispy. Mix eggs and cheese. Combine all over low heat.",
//     "description": "A creamy Roman pasta dish featuring eggs, cheese, and crispy pancetta for a rich, satisfying flavor."
//   }