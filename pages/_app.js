import "../styles/index.scss";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content="Demo create app with Next.js and Prismic/Slicemashine CMS" />
        <title>sanity-v2-demo</title>
      </Head>
      <Layout data={pageProps.data}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

App.getInitialProps = async () => {
  let pageProps = {};
  try {
    const url =
    'https://62zsqe1r.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%27layout%27]';
    const response = await fetch(url);
    const page = await response.json();
    pageProps["data"] = page.result[0];
  } catch (error) {}
  return { pageProps };
};
