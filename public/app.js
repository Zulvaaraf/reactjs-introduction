const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function MyButton({
  text,
  onClick,
  counter
}) {
  const myStyle = text !== 'Reset!!!' ? {} : {
    margin: 20,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: myStyle
  }, text);
}
function MyCounter({
  counter
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      margin: 20
    }
  }, counter);
}
function HomePage() {
  const [counter, setCounter] = React.useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyButton, {
    text: '-',
    onClick: decrement,
    counter: counter
  }), /*#__PURE__*/React.createElement(MyCounter, {
    counter: counter
  }), /*#__PURE__*/React.createElement(MyButton, {
    text: '+',
    onClick: increment,
    counter: counter
  }), /*#__PURE__*/React.createElement(MyButton, {
    text: 'Reset!!!',
    onClick: reset,
    counter: counter
  }));
}
root.render( /*#__PURE__*/React.createElement(HomePage, null));