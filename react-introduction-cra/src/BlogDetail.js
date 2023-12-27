import { useParams } from 'react-router-dom';

function BlogDetail() {
  const urlParams = useParams();

  return (
    <>
      <h1>Blog Detail</h1>
      <p>Hallo ini adalah {urlParams.param}</p>
    </>
  );
}

export default BlogDetail;
