
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<App/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default AppRoutes