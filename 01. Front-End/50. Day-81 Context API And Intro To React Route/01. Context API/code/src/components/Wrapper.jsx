import { createContext } from "react"
import React, { useState } from "react";


export const todocontext = createContext(null)


const Wrapper = (props) => {
    // console.log(props);

    const [todos, settodos] = useState([
    { id: 1, title: "Kaam Karle Bhai", isCompleted: false },
  ]);


  return (<todocontext.Provider value={[todos, settodos]}>
    {props.children}
    </todocontext.Provider>)
}

export default Wrapper