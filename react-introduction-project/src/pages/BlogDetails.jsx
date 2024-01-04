import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    async function getArticlesDetail() {
      const request = await fetch(`https:/api.spaceflightnewsapi.net/v3/blogs/${params.id}`);
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticlesDetail();
  }, [params]);

  return (
    <section>
      <h3>BlogDetail</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{articles.title}</h3>
          <time>{new Date(articles.publishedAt).toLocaleDateString()}</time>
          <img src={articles.imageUrl} alt={articles.title} />
          <p>{articles.newsSite}</p>
          <a href={articles.url}>{articles.summary}</a>
        </>
      )}
    </section>
  );
}

export default BlogDetails;
