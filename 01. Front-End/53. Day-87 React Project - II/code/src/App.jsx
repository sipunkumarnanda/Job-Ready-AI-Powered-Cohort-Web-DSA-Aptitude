
import { useContext } from 'react'
import Nav from './Components/Nav'
import {themeContex} from "./context/RecipeContext"
import MainRoutes from './routes/MainRoutes'
import Recipes from './pages/Recipes'

const App = () => {
  const [theme] = useContext(themeContex)
  return (
    <div className={`${theme == "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen w-screen pt-5`}>
      <Nav/>
      {/* <Recipes/> */}
      <MainRoutes />
    </div>
  )
}

export default App