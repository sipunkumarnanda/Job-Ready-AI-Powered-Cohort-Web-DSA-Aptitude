
import { themeContex } from "../context/RecipeContext"
import { useContext } from "react"
import {Link} from "react-router-dom"

const RecipeCard = (props) => {
     const [theme] = useContext(themeContex)
    const {id, image, chef, title, description} = props.recipe

  return (
  <Link to={`/recipes/detail/${id}`}
  className={`${theme == "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-950"} p-2 border rounded-xl shadow-lg w-[20vw] overflow-hidden hover:scale-105 transition-transform duration-300 `}>
  <img
    src={image}
    alt={title}
    className="h-[22vh] w-full object-cover rounded-lg mb-4"
  />
  <h1 className="text-xl font-semibold mb-1">{title}</h1>
  <small className="text-red-400">{chef}</small>
  <p>{description.slice(0,100)}...{" "}
    <small className="text-blue-400">more</small>
  </p>
</Link>
  )

}

export default RecipeCard