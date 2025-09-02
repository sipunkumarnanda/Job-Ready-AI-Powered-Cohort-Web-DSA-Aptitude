'use client'

import { useState } from 'react'

const page = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>Value of a is {num} </h1>
      <button onClick={()=> setNum(num+1)} className='p-1 bg-green-700 rounded mt-1'>increase</button>
    </div>
  )
}

export default page