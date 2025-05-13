
import React, { useState } from 'react'

function Create(props) {
    const setUsers = props.setUsers
    const users = props.users

    const [name, setName] = useState("")
    const [age, setAge] = useState(18)

    const submitHandler = (e) =>{
        e.preventDefault()
        const newUser = {name , age}
        console.log(newUser);

        setUsers([...users, newUser])
    }
  return (
    <>
    <h1>Register User</h1>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=> {setName(e.target.value)}} value={name} type="text" placeholder='Enter Your Name' />
        <input onChange={(e)=> {setAge(e.target.value)}} value={age} type="number" placeholder='Age'/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default Create