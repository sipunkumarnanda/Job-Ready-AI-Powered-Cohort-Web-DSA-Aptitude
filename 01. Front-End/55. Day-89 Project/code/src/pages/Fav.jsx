
import RecipeCard from '../Components/RecipeCard'

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || []
  
  let renderrecipes = favorite.map((recipe)=>{
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  })
  
  return (
    <div className='flex flex-row gap-5 p-5 flex-wrap'>
      {favorite.length > 0 ? renderrecipes : <h1>No Favorite Recipes Found</h1>}
    </div>
  )
}

export default Fav