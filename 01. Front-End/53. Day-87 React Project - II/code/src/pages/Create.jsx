
import { useForm} from "react-hook-form"
import { useContext } from "react"
import { themeContex } from "../context/RecipeContext"
import {nanoid} from "nanoid"
import {recipesContext} from "../context/RecipeContext"
import {toast} from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"

const Create = () => {

  const [theme] = useContext(themeContex)
  const {data, setData} = useContext(recipesContext)
  const navigate = useNavigate()

   const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (recipe) =>{
    recipe.id = nanoid()

    // const copyData = [...data]
    // copyData.push(recipe)
    // setData(copyData)

    setData([...data, recipe])
    toast.success("Recipe Created")
    reset()
    navigate("/recipes")
  }

  return (
  <div className="w-full h-full flex flex-col justify-center items-center">
    <h1 className="text-3xl mb-5">Create Recipe</h1>

    <form onSubmit={handleSubmit(SubmitHandler)} className={`${theme == "dark" ? `bg-gray-900` : `placeholder-gray-500`} w-[40vw] flex flex-col  border p-8 rounded mb-10`}>

      <input {...register("image", { required: true })} type="url" placeholder="Enter image url"  className="border-b outline-0 p-2 mt-2" />
      {errors.image && <small className="text-red-400 pt-2">This field is required</small>}

      <input {...register("chef", { required: true })} type="text" placeholder="Enter chef name"  className="border-b outline-0 p-2 mt-2" />
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
       
      <button className="w-[50%] py-2 border rounded m-auto mt-10 font-semibold font-xl">Save Recipe</button>
    </form>
  </div>
  )
}

export default Create