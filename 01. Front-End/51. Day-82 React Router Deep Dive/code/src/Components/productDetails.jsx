
import React, { useContext } from 'react'
import { themeContex } from './Wrapper'
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
  const [theme] = useContext(themeContex)
    const navigate = useNavigate()

    const params = useParams()
    console.log(params);

  return (
    <div className='flex justify-center items-center flex-col gap-5 mt-10'>
        <h1 className='font-thin text-3xl'>{params.name}</h1>
        <h2 className='text-2xl font-thin'>Product Description....</h2>
         <button onClick={() => navigate(-1)}  className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded`}>Go Back</button>
    </div>
  )
}

export default ProductDetails