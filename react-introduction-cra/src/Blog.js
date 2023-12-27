import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      <h1>Halaman Blog</h1>
      <ul>
        <li>
          <Link to="artikel-1">artikel 1</Link>
        </li>
        <li>
          <Link to="artikel-2">artikel 2</Link>
        </li>
        <li>
          <Link to="artikel-3">artikel 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Blog;
