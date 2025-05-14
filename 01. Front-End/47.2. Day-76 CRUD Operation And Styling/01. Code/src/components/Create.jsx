
import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const settodos = props.settodos;
  const todos = props.todos;

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodoData = { id: nanoid(), title: title, isCompleted: false };
    // console.log(newTodoData);
    settodos([...todos, newTodoData]);
    setTitle("");
  };

  const buttoncss = {
    color : "white",
    padding : "5px 10px",
    backgroundColor : "transparent",
    border : "1px solid white", 
    cursor : "pointer" ,
    borderRadius : "8px"
  }
  return (
    <>
      <h1 style={{fontSize : "1.5rem"}}>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input style={{...buttoncss, borderRadius: "1px" , cursor: "default"}}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br /> <hr />
        <button style={buttoncss}>Create Todo</button>
      </form>
    </>
  );
}

export default Create;
