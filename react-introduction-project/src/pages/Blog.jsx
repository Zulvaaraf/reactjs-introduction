import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      const request = await fetch('https:/api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {articles.map((article) => {
            return (
              <article key={article.id}>
                <h3>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                </h3>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Blog;