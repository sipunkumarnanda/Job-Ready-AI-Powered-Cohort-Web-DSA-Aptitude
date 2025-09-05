'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param = useParams()
  return (
    <div>
        <h6>{param.id}'s Collection</h6>
        <p>Thia is Dynamic Route</p>
    </div>
  )
}

export default page