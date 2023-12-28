import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          {articles.map((article) => {
            return (
              <article key={article.id}>
                <h2>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
