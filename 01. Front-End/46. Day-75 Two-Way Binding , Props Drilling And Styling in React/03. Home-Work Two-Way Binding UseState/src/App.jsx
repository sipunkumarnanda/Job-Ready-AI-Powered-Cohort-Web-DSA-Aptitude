import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <form>
        <input
          onChange={changeHandler}
          value={name}
          type="text"
          placeholder="Enter Your Name"
        />
        <p>Hello {name} !</p>
      </form>
    </>
  );
}

export default App;
