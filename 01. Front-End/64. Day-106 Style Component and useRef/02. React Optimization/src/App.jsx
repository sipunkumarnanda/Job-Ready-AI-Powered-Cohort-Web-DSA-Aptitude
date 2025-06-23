import React, { useEffect } from "react";

const App = () => {

  useEffect(()=>{
    document.title = "Home | React"
  })
  return (
    <div className="h-screen w-screen bg-gray-900 text-white p-5">App</div>
  );
};

export default App;
