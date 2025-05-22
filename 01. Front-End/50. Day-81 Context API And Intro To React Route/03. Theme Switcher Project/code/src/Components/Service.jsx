
import React, { useContext } from 'react'
import  {themeContex}  from './Wrapper'

const Service = () => {
  const data = useContext(themeContex)
  console.log(data);
  
  return (
    <h1>Service</h1>
  )
}

export default Service