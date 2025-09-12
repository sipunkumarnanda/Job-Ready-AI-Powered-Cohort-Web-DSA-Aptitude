'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params =  useParams()
    console.log(params);

  return (
    <div>
        <h6>{params.id}'s Product</h6>
        <h6>{params.detailId}'s Detail</h6>
    </div>
  )
}

export default page