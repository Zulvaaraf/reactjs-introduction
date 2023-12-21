const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function App() {
  const [nama, setNama] = React.useState('');
  function submitForm(event) {
    event.preventDefault();
    console.log(`Nama :`, nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submitForm
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name : "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    style: {
      margin: 20,
      padding: 8
    },
    onChange: function (event) {
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: 8,
      width: 100
    }
  }, "Submit"));
}
root.render( /*#__PURE__*/React.createElement(App, null));