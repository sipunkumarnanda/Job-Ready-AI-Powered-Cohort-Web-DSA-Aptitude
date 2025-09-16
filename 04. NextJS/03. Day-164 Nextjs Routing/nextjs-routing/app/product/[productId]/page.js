'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
   const param =  useParams()
  return (
    <div>
        <h6>{param.productId}'s Page</h6>
    </div>
  )
}

export default page