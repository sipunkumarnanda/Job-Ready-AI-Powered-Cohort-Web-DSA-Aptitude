
import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kaam Karle Bhai", isCompleted: false },
  ]);

  return (
    <div className="flex w-screen h-screen bg-gray-900 p-10 text-white">
      <Create settodos={settodos} todos={todos} />
      <Read settodos={settodos} todos={todos} />
    </div>
  );
};

export default App;
