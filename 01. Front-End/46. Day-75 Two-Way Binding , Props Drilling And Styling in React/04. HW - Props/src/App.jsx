
import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

function App() {

  const [users , setUsers] = useState([
    {name : "Ankita", age : 20},
    {name : "Sarthak", age : 18}
  ])

  return (
    <>
    <Create setUsers={setUsers} users={users}/>
    <Read setUsers={setUsers} users={users}/>
    </>
  )
}

export default App