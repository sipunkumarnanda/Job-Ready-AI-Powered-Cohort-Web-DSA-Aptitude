import React from 'react'
import { Link } from 'react-router-dom'
import Theme_Toggler from './Theme_Toggler'

const Nav = () => {
  return (
    <div className='flex justify-center items-center gap-10 pt-5 font-semibold'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/service">Service</Link>
        <Theme_Toggler/>
    </div>
  )
}

export default Nav