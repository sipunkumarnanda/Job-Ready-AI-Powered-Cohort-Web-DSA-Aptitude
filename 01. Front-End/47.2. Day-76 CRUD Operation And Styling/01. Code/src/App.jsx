
import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/REad";

const App = () => {

  const [todos, settodos] = useState([
    { id: 1,  title: "Kaam Karle Bhai", isCompleted: false },
  ]);

  return (
    <>
     <Create settodos={settodos} todos={todos}/>
     <Read todos={todos}/>
    </>
  );
}

export default App;
