const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');

  function generateID() {
    return +new Date();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage('required field!!');
    }

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity,
        done: false,
      };

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);

      return cancelTodoHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateID(),
        activity,
        done: false,
      },
    ]);
    setActivity('');
    setMessage('');
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);

    if (edit.id) cancelTodoHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelTodoHandler() {
    setEdit({});
    setActivity('');
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>SIMPLE TODO LIST</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="activity name"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? 'SAVE' : 'ADD'}</button>
        {edit.id && <button onClick={cancelTodoHandler}>Cancel</button>}
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)}></input>
              {todo.activity} ({todo.done ? 'FINISHED' : 'UNFINISHED'})
              <button onClick={editTodoHandler.bind(this, todo)} style={{ marginInline: 5 }}>
                EDIT
              </button>
              <button onClick={removeTodoHandler.bind(this, todo.id)} style={{ marginInline: 5 }}>
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

root.render(<App />);
