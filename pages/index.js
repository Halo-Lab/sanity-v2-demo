import Home from '../scenes/Home/Home';

export const getStaticProps = async () => {
  const url =
    'https://62zsqe1r.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27home%27]';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { page: data.result[0] },
  };
};

function HomePage({ page }) {

  return (
    <div>
      <Home page={page} />
    </div>
  )
}

export default HomePage
