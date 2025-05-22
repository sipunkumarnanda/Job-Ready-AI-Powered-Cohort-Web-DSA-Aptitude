import React, { useContext } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import About from './Components/About'
import Service from './Components/Service'
import Nav from './Components/Nav'
import { themeContex } from './Components/Wrapper'

const App = () => {
  const [theme] = useContext(themeContex)
  console.log(theme);
  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} 
    h-screen w-screen p-5`}> 
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/product" element={<Product />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/service" element={<Service />}  />
      </Routes>
    </div>
  )
}

export default App