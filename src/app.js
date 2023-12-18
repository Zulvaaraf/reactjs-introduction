const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const boxColor = 'blue';

const element = <div className={boxColor}></div>;

root.render(element);
