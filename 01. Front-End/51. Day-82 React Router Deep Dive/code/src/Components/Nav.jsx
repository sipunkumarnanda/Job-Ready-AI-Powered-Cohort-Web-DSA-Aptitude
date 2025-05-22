import React from 'react'
import { NavLink } from 'react-router-dom'
import Theme_Toggler from './Theme_Toggler'

const Nav = () => {
  return (
    <div className='flex justify-center items-center gap-10 pt-5 font-semibold'>
        <NavLink className={(e)=> e.isActive == true ? "text-red-400" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/product">Product</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/service">Service</NavLink>
        <Theme_Toggler/>
    </div>
  )
}

export default Nav