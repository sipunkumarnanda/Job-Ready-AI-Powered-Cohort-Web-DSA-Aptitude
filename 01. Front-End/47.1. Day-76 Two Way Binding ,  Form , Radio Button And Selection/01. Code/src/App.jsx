import React, { useState } from "react";

function App() {
  const [todos, settodos] = useState([
    { title: "Kaam Karle Bhai", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");
  const [isCompleted, SetisCompleted] = useState(false);

  // console.log(title, isCompleted);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodoData = { title, isCompleted };
    settodos([...todos, newTodoData]);
  };

  const todoData = todos.map((todo, index) => {
    // console.log(todo);
    return (
      <li key={index}>
        {todo.title} - {todo.isCompleted ? "Completed" : "Not Completed"}
      </li>
    );
  });

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br /> <br />
        <input
          checked={isCompleted}
          onChange={(e) => SetisCompleted(e.target.checked)}
          value={isCompleted}
          type="checkbox"
        />
        Completed

        <br /> <br />
        <button>Create Todo</button>
      </form>
      <br /> <br />
      <h1>Tasks</h1>
      <ol>{todoData}</ol>
    </>
  );
}

export default App;
