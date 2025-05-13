const Read = (props) => {
  const users = props.users;
  const renderUsers = users.map((user, index) => {
    return (
      <li key={index}>
        {user.fullname} || {user.age}
      </li>
    );
  });
  return (
    <div>
      <h1>Users Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default Read;
