import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>Ini adalaha halaman about, tentang kami lainnya bisa klik dibawah :</p>
      <ul>
        <li>
          <Link to="/about/team">team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default About;
