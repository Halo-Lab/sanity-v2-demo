import Post from "../../scenes/Post/Post";

export const getServerSideProps = async () => {
  const url =
    'https://62zsqe1r.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27blog%27]';
  const response = await fetch(url);
  const data = await response.json();
  if (!data) {
    return { notFound: true };
  }
  return {
    props: { page: data.result[0] },
  };
};

function PostPage({ page }) {  

  return (
    <div>      
      <Post data={page} />     
    </div>
  );
}

export default PostPage;
