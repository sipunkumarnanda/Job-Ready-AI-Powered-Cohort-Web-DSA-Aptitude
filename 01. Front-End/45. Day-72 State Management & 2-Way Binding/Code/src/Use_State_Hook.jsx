
import React, { useState } from 'react'

function Use_State_Hook() {
    const [username, setUsername] = useState("Sarthak")

    let changeHandler = () =>{
        setUsername("Ankur")
    }
    console.log(username);

  return (
    <>
    <h1>Username</h1>
    <h2>{username}</h2>
    <button onClick={changeHandler}>Change Name</button>
    </>
  )
}

export default Use_State_Hook