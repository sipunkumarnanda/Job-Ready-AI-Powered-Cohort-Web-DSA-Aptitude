
import React, { useContext } from 'react'
import { themeContex } from './Wrapper'
import { useNavigate } from "react-router-dom"
import { Outlet } from 'react-router-dom'

const Service = () => {
  
  const [theme] = useContext(themeContex)
    const navigate = useNavigate()

  return (
   <div>
    <h1 className="text-3xl font-thin m-10">Service</h1>
     <button onClick={() => navigate("/service/detail")}  className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded mt-5 mr-10`}>More details</button>

     <button onClick={() => navigate("/service/update")}  className={`${theme == "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-4 py-2 rounded mt-5`}>More Update</button>
     <hr className='my-10' />
     <Outlet/>
   </div>
  )
}

export default Service