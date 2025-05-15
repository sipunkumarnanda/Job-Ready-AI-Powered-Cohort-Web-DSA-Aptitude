
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

  return (
    <div className=" w-[50%] p-10 flex flex-col ">

      <h1 className="mb-10 text-4xl text-white font-thin">
        Set <span className="text-red-400">Reminder</span> for <br /> tasks
      </h1>

      <form onSubmit={submitHandler} className="flex flex-col">

        <input
          className="p-2 border-b w-full text-2xl font-thin outline-0"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />

        <br /> <br />

        <button className="text-xl border py-2 w-[12rem] cursor-pointer rounded">
          Create Todo
        </button>

      </form>

    </div>
  );
};

export default Create;
