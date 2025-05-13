
import React from 'react'

export const Json_rendering = () => {
    let profiles = [
        {name : "John" , age : 12} ,
        {name : "sarthak" , age : 54} ,
        {name : "ankur" , age : 18} ,
    ]

    let updatedProfiles = profiles.map((profile, index)=>{
        return (
            <li key={index}>
            <span>Name : {profile.name} </span> | 
            <span>Age : {profile.age} </span>
        </li>
        )
    })

    console.log(updatedProfiles);
  return (
    <>
    <h1>Rendering Json</h1>
    <ol>{updatedProfiles}</ol>
    </>
  )
}

export default Json_rendering
