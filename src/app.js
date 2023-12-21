const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  const [nama, setNama] = React.useState('');

  function submitForm(event) {
    event.preventDefault();

    console.log(`Nama :`, nama);
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          style={{ margin: 20, padding: 8 }}
          onChange={function (event) {
            setNama(event.target.value);
          }}
        ></input>
      </div>
      <button type="submit" style={{ padding: 8, width: 100 }}>
        Submit
      </button>
    </form>
  );
}

root.render(<App />);
