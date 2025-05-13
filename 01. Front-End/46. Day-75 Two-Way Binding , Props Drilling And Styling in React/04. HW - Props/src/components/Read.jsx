
import React from 'react'

function Read(props) {
    const users = props.users

    const renderUsers = users.map((user, index)=>{
        return (
            <li key={index}>Name : {user.name} || Age : {user.age}</li>
        )
    })

  return (
   <>
   <ol>{renderUsers}</ol>
   </>
  )
}

export default Read