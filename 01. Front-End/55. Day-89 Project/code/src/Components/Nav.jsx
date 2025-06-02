
import React from 'react'
import { NavLink } from 'react-router-dom'
import Theme_Toggler from './Theme_Toggler'

const Nav = () => {
  return (
    <div className="flex justify-center items-center gap-15 font-bold mb-10">
        <NavLink className={(e)=> e.isActive ? `text-red-400` : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? `text-red-400` : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? `text-red-400` : ""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? `text-red-400` : ""} to="/fav">Favorite Recipes</NavLink>
        <NavLink className={`${(e)=> e.isActive ? `text-red-400` : ""} border px-3 py-3 rounded`} to="/create-recipe">Create Recipe</NavLink>
        <Theme_Toggler />
    </div>
  )
}

export default Nav