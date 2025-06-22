import { useCallback, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);


  const ingredients = useCallback(() => {
     console.log("Recipe Ingredients Here");
  },[sub])   // jab sub me changes ho ta ye func call hoga 

  return (
    <div className="py-10 px-10 bg-gray-900 w-screen h-screen text-white font-thin">
      <button
          onClick={() => setAdd(add + 1)}
          className="text-2xl font-bold rounded bg-blue-400 hover:bg-blue-500 px-5 py-3 cursor-pointer"
        >
          +
        </button>
        <span className="text-xl ml-4 font-bold">{add}</span>
         <br /> <br />

          <button
           onClick={() => setSub(sub - 1)}
          className="text-2xl font-bold rounded bg-red-400 hover:bg-red-500 px-5 py-3 cursor-pointer"
        >
          -
        </button>
        <span className="text-xl ml-5 font-bold">{sub}</span> <br /> <br />

        <Recipe ing={ingredients}/>
    </div>
  );
};

export default App;
