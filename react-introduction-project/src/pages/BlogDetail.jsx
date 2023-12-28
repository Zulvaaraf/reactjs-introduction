import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BLogDetail() {
  const [article, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`);
        const response = await request.json();

        setArticles(response);
        setLoading(false);
      }
      getArticle();
    },
    [params]
  );

  return (
    <section>
      {loading ? (
        <p>Loading article...</p>
      ) : (
        <>
          <h1>{article.title}</h1>
          <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <p>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
        </>
      )}
    </section>
  );
}
