import { useEffect } from 'react';

function Profile() {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">Ini adalah halaman profile</p>
    </section>
  );
}

export default Profile;
