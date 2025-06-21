import { useEffect, useMemo, useState } from "react";

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);

  const addHandler = () => {
    setAdd(add + 1);
  };

  const subHandler = () => {
    setSub(sub - 1);
  };

  // const product = () => {
  //   console.log("Product called !"); // here this func called , becasue of add value changed
  //   return add * 2;
  // }

  const product = useMemo(() => {
    console.log("Product called !"); // usememo stoping the func call when another value's state is changed
    return add * 2;
  },[add])


  // This is to check on updation component is mounted or unmounted
  useEffect(()=>{
    console.log("Page is Mounted !");
    return () => {
      console.log("Page is UnMounted !");
    }
  },[])


  console.log("Hello 1") 
  // is called every time because, on each component re-render, the entire function body is re-executed — except for hooks like useMemo, useEffect, etc., which are managed by React.

  // NOTE 
  // It is called every time because, on each component re-render, the entire function body is re-executed. However, hooks like useMemo, useEffect, etc., are managed by React to optimize when their logic actually runs.


  return (
    <div className="py-10 px-10 bg-gray-900 w-screen h-screen text-white font-thin">
      <h1 className="text-4xl font-bold mb-5">{product}</h1>
      <div className="">
        {" "}
        {/* flex justify-center items-center min-h-screen gap-4  */}
        <button
          onClick={addHandler}
          className="text-2xl font-bold rounded bg-blue-400 hover:bg-blue-500 px-5 py-3 cursor-pointer"
        >
          +
        </button>
        <span className="text-xl ml-4 font-bold">{add}</span> <br /> <br />
        <button
          onClick={subHandler}
          className="text-2xl font-bold rounded bg-red-400 hover:bg-red-500 px-5 py-3 cursor-pointer"
        >
          -
        </button>
        <span className="text-xl ml-5 font-bold">{sub}</span>
      </div>
    </div>
  );
};

export default App;
