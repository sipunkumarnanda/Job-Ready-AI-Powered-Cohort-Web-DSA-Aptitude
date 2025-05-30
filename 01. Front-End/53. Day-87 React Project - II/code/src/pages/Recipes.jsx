
import RecipeCard from '../Components/RecipeCard'
import {recipesContext} from '../context/RecipeContext'
import { useContext } from 'react'



const Recipes = () => {
  const {data} = useContext(recipesContext)
  
  let renderrecipes = data.map((recipe)=>{
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  })
  
  return (
    <div className='flex flex-row gap-5 p-5 flex-wrap'>
      {data.length > 0 ? renderrecipes : <h1>No Data Found</h1>}
    </div>
  )
}

export default Recipes