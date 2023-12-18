const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const element = (
  <div
    style={{
      marginLeft: 200,
      width: 200,
      height: 200,
      backgroundColor: 'blue',
    }}
  ></div>
);

root.render(element);
