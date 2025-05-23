
import React from 'react'
import {recipesContext} from '../context/RecipeContext'
import { useContext } from 'react'



const Recipes = () => {
  const {data} = useContext(recipesContext)
  
  let renderrecipes = data.map((recipe)=>{
    return (
      <div
  className="p-4 border rounded-xl shadow-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-[20%] hover:scale-105 transition-transform duration-300"
  key={recipe.id}
>
  <img
    src={recipe.image}
    alt={recipe.title}
    className="h-40 w-full object-cover rounded-lg mb-4"
  />
  <h1 className="text-xl font-semibold mb-1">{recipe.title}</h1>
  <h2 className="font-semibold text-gray-500 dark:text-gray-300 mb-2">{recipe.category}</h2>

  <p className="text-sm mb-1"><span className="font-semibold">Chef:</span> {recipe.chef}</p>
  <p className="text-sm mb-1"><span className="font-semibold">Ingredients:</span> {recipe.ingredients}</p>
  <p className="text-sm mb-1"><span className="font-semibold">Instruction:</span> {recipe.instruction}</p>
  <p className="text-sm text-justify"><span className="font-semibold">Description:</span> {recipe.description}</p>
</div>

    )
  })
  return (
    <div className='flex flex-row gap-5 p-5 flex-wrap'>
      {renderrecipes}
    </div>
  )
}

export default Recipes