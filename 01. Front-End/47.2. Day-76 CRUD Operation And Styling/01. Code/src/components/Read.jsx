
const Read = (props) => {
  const todos = props.todos;

  const renderTodos = todos.map((todo) => {
    // console.log(todo);
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <>
      <br /> <br />
      <h1 style={{color: "orange", fontSize: "1.5rem"}}>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </>
  );
}

export default Read;
