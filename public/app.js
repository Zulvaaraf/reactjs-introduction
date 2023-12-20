const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function HomePage() {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log(document.getElementById('judul'));
  }, [count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hallo ini halaman utama"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setClick(true);
    }
  }, "klik aku dong"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCount(count + 1);
    }
  }, "Tambah"), "Nilai Saat Ini: ", count);
}
root.render( /*#__PURE__*/React.createElement(HomePage, null));