import React, { useState } from "react";

const Create = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;

  // console.log(props);

  const [fullname, setfullname] = useState("");
  const [age, setAge] = useState(18);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age };
    console.log(newuser); // api - backend mein data bhejenege yaha se
    setUsers([...users, newuser]);
  };


  return (
    <div>
      <form onSubmit={SubmitHandler}>

        <h1>Register USer</h1>

        <input
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Full Name"
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />

        <button>Submit</button>
        
      </form>
    </div>
  );
};

export default Create;
