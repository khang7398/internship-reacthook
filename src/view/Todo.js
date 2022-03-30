const Todo = (props) => {
  const { todos, DeleteTodo } = props;

  const handlDelete = (id) => {
    DeleteTodo(id);
  };
  return (
    <div className="todo-container">
      {todos.map((todo, index) => {
        return (
          <>
            <li className="todo-child" key={todo.id}>
              {todo.name}
              &nbsp; &nbsp;{' '}
              <button type="button" onClick={() => handlDelete(todo.id)}>
                x
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
};
export default Todo;
