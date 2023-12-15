const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function MyButton({ text, onClick, counter }) {
  const myStyle = text !== 'Reset!!!' ? {} : { margin: 20, display: 'block' };

  return (
    <button onClick={onClick} style={myStyle}>
      {text}
    </button>
  );
}

function MyCounter({ counter }) {
  return <span style={{ margin: 20 }}>{counter}</span>;
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

  return (
    <>
      <MyButton text={'-'} onClick={decrement} counter={counter} />
      <MyCounter counter={counter} />
      <MyButton text={'+'} onClick={increment} counter={counter} />
      <MyButton text={'Reset!!!'} onClick={reset} counter={counter} />
    </>
  );
}

root.render(<HomePage />);