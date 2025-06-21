import { useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const [add, setAdd] = useState(0);

  const ingredients = () => {
     console.log("Recipe Ingredients Here");
  }

  return (
    <div className="py-10 px-10 bg-gray-900 w-screen h-screen text-white font-thin">
      <button
          onClick={() => setAdd(add + 1)}
          className="text-2xl font-bold rounded bg-blue-400 hover:bg-blue-500 px-5 py-3 cursor-pointer"
        >
          +
        </button>
        <span className="text-xl ml-4 font-bold">{add}</span> <br /> <br />

        <br /> <br />

        <Recipe ingredients/>
    </div>
  );
};

export default App;
