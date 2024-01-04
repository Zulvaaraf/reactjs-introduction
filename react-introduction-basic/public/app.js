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
        done: false
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = newTodos;
      setTodos(updatedTodos);
      return cancelTodoHandler();
    }
    setTodos([...todos, {
      id: generateID(),
      activity,
      done: false
    }]);
    setActivity('');
  }
  function removeTodoHandler(todoId) {
    const filteredTodo = todos.filter(todo => {
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
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(currentTodo => {
      return currentTodo.id == todo.id;
    });
    const updateTodos = [...todos];
    updateTodos[editTodoIndex] = newTodos;
    setTodos(updateTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application Todolist"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama aktifitas",
    value: activity,
    name: "aktifitas",
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'SAVE CHANGES' : 'ADD'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelTodoHandler
  }, "CANCEL")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, "(", todo.done ? 'sudah selesai' : 'belum selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "EDIT"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "DELETE"));
  })));
}
root.render( /*#__PURE__*/React.createElement(App, null));