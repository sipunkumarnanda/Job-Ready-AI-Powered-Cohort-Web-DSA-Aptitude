
import React, { useState } from 'react'

function App() {
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("mumbai")
  return (
    <>
    
        <h2>Gender Radio Button selection</h2>
        <input
          onChange={(e) => setgender(e.target.value)}
          value="male"
          checked={gender == "male" ? true : false}
          type="radio"
        />
        Male


        <input
          onChange={(e) => setgender(e.target.value)}
          value="female"
           checked={gender == "female" ? true : false}
          type="radio"
        />
        Female

        <br /> <br />

        <h2>Select Option</h2>
        <select onChange={(e)=> setcity(e.target.value)} value={city}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br />

    </>
  )
}

export default App