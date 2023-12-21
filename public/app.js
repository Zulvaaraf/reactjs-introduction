const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function App() {
  const namaRef = React.useRef(null);
  function submitForm(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log('name : ', nama);
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
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: 8,
      width: 100
    }
  }, "Submit"));
}
root.render( /*#__PURE__*/React.createElement(App, null));