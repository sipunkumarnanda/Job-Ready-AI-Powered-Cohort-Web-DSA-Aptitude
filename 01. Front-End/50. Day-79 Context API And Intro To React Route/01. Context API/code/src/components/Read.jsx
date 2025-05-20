
import { useContext } from "react";
import {toast} from "react-toastify"
import { todocontext } from "./Wrapper";

const Read = () => {
// const s = useContext(todocontext)

const [todos, settodos] = useContext(todocontext)



  const DeleteHandler = (id) => {
    let filterTodo = todos.filter((todo) => {
      return todo.id != id;
    });

    settodos(filterTodo);

    toast.error("Todo deleted")
  };

  const renderTodos = todos.map((todo) => {
    // console.log(todo);
    return (
      <li key={todo.id} className="text-xl bg-gray-950 px-10 py-3 mb-2">
        <div className="flex justify-between font-light">
          {todo.title}{" "}
          <p
            onClick={() => DeleteHandler(todo.id)}
            className="cursor-pointer text-red-500"
          >
            Delete
          </p>
        </div>
      </li>
    );
  });

  return (
    <div className="w-[50%]  p-10 ml-5 overflow-hidden">
      <h1 className="mb-10 text-4xl text-white font-thin text-center">
        <span className="text-pink-600">Pending</span> Todos
      </h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
