const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
function App() {
  React.useEffect(function () {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      console.log(request);
      const response = await request.json();
      console.log(response);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Data fetch");
}
root.render( /*#__PURE__*/React.createElement(App, null));