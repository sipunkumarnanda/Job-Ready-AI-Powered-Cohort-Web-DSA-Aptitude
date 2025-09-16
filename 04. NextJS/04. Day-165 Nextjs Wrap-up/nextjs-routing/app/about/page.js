
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h6>About Page</h6>
        <Link href='/about/team' className='text-2xl m-2 text-pink-500 underline'>Team</Link>
        <Link href='/about/mission' className='text-2xl m-2 text-pink-500 underline'>Mission</Link>
    </div>
  )
}

export default page