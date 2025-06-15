
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {asyncupdateproduct} from "../../store/actions/productActions"
import {asyncdeleteproduct} from "../../store/actions/productActions"
import {asyncupdateuser} from "../../store/actions/userActions"
import {toast} from "react-toastify"

const ProductDetails = () => {
  const navigate = useNavigate()

  const {id} = useParams()
  // console.log(id);
  const products = useSelector((state) => state.productReducer.products)
 const users = useSelector((state) => state.userReducer.users);
  // console.log( "Products : ",products);
  // console.log("Admin : ",users?.isAdmin);

  const product = products?.find((prod)=>{
    return prod.id == id
  })
  // console.log("Prod : " , product);

  // ---------------------------------------

   const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, reset} = useForm()

    useEffect(() => {
  if (product) {
    reset({
      image: product.image,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category
    });
  }
}, [product, reset]);


  const UpdateProductHandler = (info) =>{
    info.id = id
    // console.log(info);
    dispatch(asyncupdateproduct(info))
    reset()

  }


  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/")
  }


  
    // Add to cart feature 
  
    const AddtoCartHandler = (id) => {
      if(users){
          const copyuser = {...users, cart : [...users.cart]}
      const x = copyuser.cart.findIndex((c) => c.productId == id)
      console.log(x);
      
      if(x == -1){
        copyuser.cart.push({productId : id , quantity : 1})
      }else{
        copyuser.cart[x] = {
          productId : id , 
          quantity : copyuser.cart[x].quantity + 1 
        }
      }
  
      dispatch(asyncupdateuser(copyuser))
      }else{
        toast.error("please Log in")
        navigate("/login")
      }
    }


  
  if(!users || users?.isAdmin == false) return product ? (
    <>
  <div className="border max-w-3xl mx-auto p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
  <img
    src={product.image}
    alt={product.title}
    className="w-full md:w-1/3 h-auto object-contain rounded-md p-3"
  />

  <div className="flex-1 flex flex-col justify-between">
    <div>
      <h1 className="text-xl font-semibold mb-1">{product.title}</h1>
      <h4 className="text-xs text-indigo-600 font-medium uppercase mb-2">{product.category}</h4>
      <p className="text-sm leading-relaxed line-clamp-4">{product.description}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
      <h2 className="text-2xl font-bold text-green-600">${product.price}</h2>

      <button type='button' onClick={() => AddtoCartHandler(product.id)} className="px-5 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>
  </>
  ) : "loading......."

  return product ? (
    <>
    <div className="border max-w-3xl mx-auto p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4">
  <img
    src={product.image}
    alt={product.title}
    className="w-full md:w-1/3 h-auto object-contain rounded-md p-3"
  />

  <div className="flex-1 flex flex-col justify-between">
    <div>
      <h1 className="text-xl font-semibold mb-1">{product.title}</h1>
      <h4 className="text-xs text-indigo-600 font-medium uppercase mb-2">{product.category}</h4>
      <p className="text-sm leading-relaxed line-clamp-4">{product.description}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
      <h2 className="text-2xl font-bold text-green-600">${product.price}</h2>
      <button onClick={() => AddtoCartHandler(product.id)} className="px-5 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>

{/* ------------------------------------------------------------------------- */}

<div className='mt-10 w-[50%] mx-auto border p-2 flex flex-col'>
  <h1 className='text-xl font-bold text-center'>Edit Product</h1>
    <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex flex-col  p-5'>

        <input {...register("image", {required : true})} className='outline-0 border-b p-2' type="url"  />
        {errors.image && <small className="text-red-400">image link is required</small>}

        <input {...register("title", {required : true})} className='outline-0 border-b p-2' type="text" />
        {errors.title && <small className="text-red-400">title is required</small>}

        <input {...register("price", { required: true})} className='outline-0 border-b p-2' type="number"/>
        {errors.price && <small className="text-red-400">price is required</small>}
        

        <textarea {...register("description", { required: true })}
        className='outline-0 border-b p-2' 
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

        <button className="p-2 bg-green-800 rounded cursor-pointer text-white w-[30%] mx-auto mt-5">Update product</button>
         <button type='button' onClick={DeleteHandler} className="p-2 bg-red-500 rounded mx-auto mt-5">Delete product</button>
    </form>
  
</div> 
    </>

  ) : "loading......."
}

export default ProductDetails