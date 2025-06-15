
import { useForm } from "react-hook-form"
import nanoid from "nano-id"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {asynccreateproduct} from "../../store/actions/productActions"

const CreateProduct = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const CreateProductHandler = (product) =>{
    product.id = nanoid();
    dispatch(asynccreateproduct(product))
    reset()
    navigate("/")

    console.log(product);
  }

  return (
    <>
    <form onSubmit={handleSubmit(CreateProductHandler)} className='flex flex-col w-1/2 ml-5'>

        <input {...register("image", {required : true})} className='outline-0 border-b p-2 mb-2' type="url" placeholder='Image url' />
        {errors.image && <small className="text-red-400">image link is required</small>}

        <input {...register("title", {required : true})} className='outline-0 border-b p-2 mb-2' type="text" placeholder='Title' />
        {errors.title && <small className="text-red-400">title is required</small>}

        <input {...register("price", { required: true})} className='outline-0 border-b p-2 mb-2' type="number" placeholder='Price'/>
        {errors.price && <small className="text-red-400">price is required</small>}
        

        <textarea {...register("description", { required: true })} className='outline-0 border-b p-2 mb-5' placeholder='Description'
        rows={2}/>
        {errors.description && <small className="text-red-400">description is required</small>}

       <select {...register("category", {required: true})}
        className='outline-0 border-b p-2 mb-5 bg-gray-800'>
  <option value="">Select a category</option>
  <option value="men's clothing">Men's clothing</option>
  <option value="women's clothing">Women's clothing</option>
  <option value="electronics">Electronics</option>
  <option value="jewelery">Jewelery</option>
  <option value="home decor">Home decor</option>
</select>
        {errors.category && <small className="text-red-400">category is required</small>}

        <button className="p-2 bg-green-800 rounded cursor-pointer text-white w-[30%] m-auto mb-5">create product</button>
    </form>
    </>
  )
}

export default CreateProduct