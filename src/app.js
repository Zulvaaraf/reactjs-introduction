const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function HomePage() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log(document.getElementById('judul'));
  }, [count]);

  return (
    <>
      <h1 id="judul">Hallo ini halaman utama</h1>
      <button
        onClick={() => {
          setClick(true);
        }}
      >
        klik aku dong
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      Nilai Saat Ini: {count}
    </>
  );
}

root.render(<HomePage />);
