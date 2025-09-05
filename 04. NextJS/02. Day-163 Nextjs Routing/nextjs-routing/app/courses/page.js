
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h6>All Courses</h6>
        
        <Link className='m-2 text-xl' href='/courses/cohort1'>Cohort 1</Link>
        <Link className='m-2 text-xl' href='/courses/cohort2'>Cohort 1</Link>
    </div>
  )
}

export default page