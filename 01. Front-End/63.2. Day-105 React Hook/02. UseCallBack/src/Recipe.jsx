
import React, { memo } from 'react'

const Recipe = ({ing}) => {
  console.log("Hello from Recipe component");
  // console.log(ing);
  return (
  <>
    <div className='text-2xl'>Recipe</div>
    <h1>{ing()}</h1>
  </>
  )
}


export default memo(Recipe)