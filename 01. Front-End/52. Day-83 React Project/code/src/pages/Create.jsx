
import { useForm} from "react-hook-form"
import { useContext } from "react"
import { themeContex } from "../context/RecipeContext"
import {nanoid} from "nanoid"
import {recipesContext} from "../context/RecipeContext"

const Create = () => {

  const [theme] = useContext(themeContex)
  const {data, setData} = useContext(recipesContext)

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
    reset()
  }

  return (
  <div className="w-full flex flex-col justify-center items-center">
    <h1 className="text-3xl mb-5">Create Recipe</h1>

    <form onSubmit={handleSubmit(SubmitHandler)} className={`${theme == "dark" ? `bg-gray-900` : `placeholder-gray-500`} flex flex-col w-[50vw] border p-8 rounded mb-10`}>

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
        className="border-b outline-0 mt-5 text-gray-500 p-2" > 
       <option value="cat-1" id="">category 1</option>
       <option value="cat-2" id="">category 2</option>
       <option value="cat-3" id="">category 3</option>
       </select>
       
      <button className="w-[50%] py-2 border rounded m-auto mt-10 font-semibold font-xl">Save Recipe</button>
    </form>
  </div>
  )
}

export default Create