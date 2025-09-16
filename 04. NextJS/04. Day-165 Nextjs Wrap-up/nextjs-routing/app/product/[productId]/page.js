'use client'


import { notFound, useParams } from 'next/navigation'
import React from 'react'

const page = () => {
   const validProducts = ['laptop', 'phone', 'tablet']

   const params = useParams()
   console.log(params);

   if(!validProducts.includes(params.productId)){
    notFound()
   }
  return (
    <div>
        <h6>Product : {params.productId}</h6>
    </div>
  )
}

export default page