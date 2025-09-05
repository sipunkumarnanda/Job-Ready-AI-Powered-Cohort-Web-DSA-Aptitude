'use client'

import React, { useState } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const page = () => {
  const [num, setNum] = useState(0)
  return (
   <>
    <div>
      <h1 className='text-xl font-bold'>Hello Counter : {num}</h1>
      <button onClick={()=> setNum(num+1)} className='p-2 bg-green-800 rounded'>Increase</button>
    </div>
   </>
  )
}

export default page