import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title ">Selamat Datang Di Website Zulvaaraf</h1>
      <p className="section-description">Ini adalah website react pertama saya, kamu bisa melihat beberapa informasi mengenai saya</p>
    </section>
  );
}

export default Home;
