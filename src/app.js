const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');

      const response = await request.json();
      setNews(response);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

root.render(<App />);
