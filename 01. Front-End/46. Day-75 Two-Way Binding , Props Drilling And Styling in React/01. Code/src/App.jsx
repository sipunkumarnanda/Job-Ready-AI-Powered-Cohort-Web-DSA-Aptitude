
import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

function App() {

  const [users, setUsers] = useState([
    {fullname : "Jhon", age : 12},
    {fullname : "Ankita", age : 14},
    {fullname : "Sarthak", age : 18},
  ])

  return (
    <>
    <Create users={users} setUsers={setUsers}/>
    <Read users={users} setUsers={setUsers}/>
    </>
  )
}

export default App