import Blog from "../../scenes/Blog/Blog";

export const getStaticProps = async () => {
  const url =
    'https://62zsqe1r.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27blog%27]';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { page: data.result[0] },
  };
};

function BlogPage({ page }) {

  return (
    <div>
      <Blog page={page} />
    </div>
  );
}

export default BlogPage;
