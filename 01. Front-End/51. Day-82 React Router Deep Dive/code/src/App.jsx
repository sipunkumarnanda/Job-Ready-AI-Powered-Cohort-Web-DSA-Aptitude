
import React, { useContext } from 'react'
import { themeContex } from './Components/Wrapper'
import Nav from './Components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  const [theme] = useContext(themeContex)

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} 
    h-screen w-screen p-5`}> 
    <Nav/>
      <Mainroutes />
    </div>
  )
}

export default App