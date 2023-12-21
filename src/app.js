const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  const namaRef = React.useRef(null);

  function submitForm(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log('name : ', nama);
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Name : </label>
        <input type="text" name="name" style={{ margin: 20, padding: 8 }} ref={namaRef}></input>
      </div>
      <button type="submit" style={{ padding: 8, width: 100 }}>
        Submit
      </button>
    </form>
  );
}

root.render(<App />);
