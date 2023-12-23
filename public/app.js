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
        done: false
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelTodoHandler();
    }
    setTodos([...todos, {
      id: generateID(),
      activity,
      done: false
    }]);
    setActivity('');
    setMessage('');
  }
  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(todo => {
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
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(currentTodo => {
      return currentTodo.id == todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "SIMPLE TODO LIST"), message && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "activity name",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'SAVE' : 'ADD'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelTodoHandler
  }, "Cancel")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoHandler.bind(this, todo)
    }), todo.activity, " (", todo.done ? 'FINISHED' : 'UNFINISHED', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo),
      style: {
        marginInline: 5
      }
    }, "EDIT"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id),
      style: {
        marginInline: 5
      }
    }, "DELETE"));
  })));
}
root.render( /*#__PURE__*/React.createElement(App, null));