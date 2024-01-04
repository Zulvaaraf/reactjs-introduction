import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function getArticlesDetail() {
      const request = await fetch(`https:/api.spaceflightnewsapi.net/v3/blogs/${params.id}`);

      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();

      document.title = response.title;
      setArticles(response);
      setLoading(false);
    }
    getArticlesDetail();
  }, [params]);

  if (notFound) {
    return <h1>HALAMAN TIDAK DITEMUKAN</h1>;
  }

  return (
    <section className="section">
      <h3 className="section-title">BlogDetail</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="article-title">{articles.title}</h3>
          <time className="article-time">{new Date(articles.publishedAt).toLocaleDateString()}</time>
          <img src={articles.imageUrl} alt={articles.title} className="article-image" />
          <p className="article-summary">{articles.summary}</p>
          <p className="article-source">
            Source : <a href={articles.url}>{articles.newsSite}</a>
          </p>
        </>
      )}
    </section>
  );
}

export default BlogDetails;
