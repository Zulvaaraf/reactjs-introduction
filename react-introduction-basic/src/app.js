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
      return setMessage('REQUIRED FIELD!');
    }

    setMessage('');

    if (edit.id) {
      const newTodos = {
        ...edit,
        activity,
        done: false,
      };

      const editTodoIndex = todos.findIndex((todo) => {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = newTodos;

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
  }

  function removeTodoHandler(todoId) {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodo);

    if (edit.id) cancelTodoHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelTodoHandler() {
    setActivity('');
    setEdit({});
  }

  function doneTodoHandler(todo) {
    const newTodos = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex((currentTodo) => {
      return currentTodo.id == todo.id;
    });

    const updateTodos = [...todos];
    updateTodos[editTodoIndex] = newTodos;

    setTodos(updateTodos);
  }

  return (
    <>
      <h1>Application Todolist</h1>
      {message && <div style={{ color: 'red' }}>{message}</div>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="nama aktifitas"
          value={activity}
          name="aktifitas"
          onChange={(event) => {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? 'SAVE CHANGES' : 'ADD'}</button>
        {edit.id && <button onClick={cancelTodoHandler}>CANCEL</button>}
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)} />
              {todo.activity}({todo.done ? 'sudah selesai' : 'belum selesai'})<button onClick={editTodoHandler.bind(this, todo)}>EDIT</button>
              <button onClick={removeTodoHandler.bind(this, todo.id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

root.render(<App />);
