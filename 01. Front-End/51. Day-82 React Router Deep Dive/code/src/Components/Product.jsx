import { useNavigate } from "react-router-dom"
import React, { useContext } from 'react'
import { themeContex } from './Wrapper'

const Product = () => {
  let [theme] = useContext(themeContex)

  const navigate = useNavigate()
  const NavigatorHandler = (name) =>{
    navigate(`/product/detail/${name}`)
  }

  return (
    <>
     <h1 className='text-5xl font-thin mb-5 mt-10 text-center'>Product</h1>
   <div className="flex gap-30 justify-center mt-15">

   <div>
    <h1 className="text-3xl font-thin mb-3">Product 1</h1>
    <button onClick={ ()=> NavigatorHandler("product 1")} className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded`}>See Details</button>
   </div>

   <div>
    <h1 className="text-3xl font-thin mb-3">Product 2</h1>
    <button onClick={ ()=> NavigatorHandler("product 2")}  className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded`}>See Details</button>
   </div>

   <div>
    <h1 className="text-3xl font-thin mb-3">Product 3</h1>
    <button onClick={ ()=> NavigatorHandler("product 3")} className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded`}>See Details</button>
   </div>

   </div>
    </>
  )
}

export default Product