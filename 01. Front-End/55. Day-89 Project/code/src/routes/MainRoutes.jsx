
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotFound from '../pages/PageNotFound'
import Fav from '../pages/Fav'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/detail/:id' element={<SingleRecipe/>}/>
        <Route path='/create-recipe' element={<Create/>}/>
        <Route path='/fav' element={<Fav />}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default MainRoutes