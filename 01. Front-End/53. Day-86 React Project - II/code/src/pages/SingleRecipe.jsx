
import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import {recipesContext} from "../context/RecipeContext";
import { useForm} from "react-hook-form"
import { themeContex } from "../context/RecipeContext"
import {toast} from "react-toastify"




const SingleRecipe = () => {
    const {data, setData} = useContext(recipesContext)
    const [theme] = useContext(themeContex)
     const param = useParams()
    const navigate = useNavigate()
     const recipe = data.find((r)=>{
        return param.id == r.id
    })
   const { register, handleSubmit, formState: { errors } } = useForm({defaultValues :
    {
        title : recipe.title,
        chef : recipe.chef,
        ingredients : recipe.ingredients,
        description : recipe.description,
        category : recipe.category,
        image : recipe.image,
        instruction : recipe.instruction
    }
   })

      const SubmitHandler = (recipe) =>{
        const index = data.findIndex((recipe)=> recipe.id == param.id)
        const copyData = [...data]
        copyData[index] = {...copyData[index], ...recipe}
        setData(copyData)
        toast.success("Recipe Updated !")
  }

    const DeleteHandler = () => {
    const filterData = data.filter((r)=> r.id != param.id)
    setData(filterData)
    toast.success("Recipe Deleted successfully !")
    navigate("/recipes")
  }
  
  return (
    <div className="max-w-5xl mx-auto p-4 rounded-2xl flex flex-col md:flex-row gap-6 transition-all duration-300">

  <div className="md:w-1/2 w-full flex flex-col gap-4  border p-8 rounded mb-10">
    <img
      className="w-2/3 h-40 md:h-[200px] object-cover rounded-xl"
      src={recipe.image}
      alt={recipe.title}
    />
    <h1 className="text-3xl font-bold">{recipe.title}</h1>
    <h2 className="text-xl font-semibold text-red-500">By {recipe.chef}</h2>
    <h3 className="text-lg italic">{recipe.category}</h3>
      <p><span className="font-bold">Ingredients:</span> {recipe.ingredients}</p>
      <p><span className="font-bold">Instruction:</span> {recipe.instruction}</p>
      <p><span className="font-bold">Description:</span> {recipe.description}</p>
  </div>

  <div>
    <form onSubmit={handleSubmit(SubmitHandler)} className={`${theme == "dark" ? `bg-gray-900` : `placeholder-gray-500`} w-[40vw] flex flex-col  border p-8 rounded mb-10`}>

      <input {...register("image", { required: true })} type="url" placeholder="Enter image url" className="border-b outline-0 p-2 mt-2" />
      {errors.image && <small className="text-red-400 pt-2">This field is required</small>}

      <input {...register("chef", { required: true })} type="text" placeholder="Enter chef name" className="border-b outline-0 p-2 mt-2" />
      {errors.chef && <small className="text-red-400 pt-2">This field is required</small>}

      <input {...register("title", { required: true })} type="text" placeholder="Recipe Title" className="border-b outline-0 p-2 mt-5" />
      {errors.title && <small className="text-red-400 pt-2">This field is required</small>}

      <textarea {...register("description", { required: true })} placeholder="Recipe Description" className="border-b outline-0 mt-5" />
      {errors.description && <small className="text-red-400 pt-2">This field is required</small>}

      <textarea {...register("ingredients", { required: true })} placeholder="Write Ingredients separated by comma" className="border-b outline-0 mt-5" />
      {errors.ingredients && <small className="text-red-400 pt-2">This field is required</small>}

       <textarea {...register("instruction", { required: true })} placeholder="Write instruction separated by comma" className="border-b outline-0 mt-5" />
      {errors.instruction && <small className="text-red-400 pt-2">This field is required</small>}

       <select {...register("category", { required: true })}
        className={`${theme == "dark" ? 'text-gray-500' : 'text-black'} border-b outline-0 mt-5 p-2`}> 
       <option value="breakfast" id="">breakfast</option>
       <option value="launch" id="">launch</option>
       <option value="supper" id="">supper</option>
       <option value="dinner" id="">dinner</option>
       </select>
       
      <button className="w-[50%] py-2 border rounded m-auto mt-10 font-semibold font-xl bg-blue-900">Update Recipe</button>
      <button onClick={DeleteHandler}
      className="w-[50%] py-2 border rounded m-auto mt-10 font-semibold font-xl bg-red-900">Delete Recipe</button>
    </form>
  </div>
</div>

  )
}

export default SingleRecipe