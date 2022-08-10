import Head from "next/head";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Layout from "../components/Layout/Layout";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const {pageTitle, pageDescription, google_analytics_id} = pageProps.data.metaData

  return (
    <>
      <Head className="head">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="description" content={pageDescription} />
        <title>{pageTitle}</title>
      </Head>
      <Layout data={pageProps.data}>
        <GoogleAnalytics measurementId={google_analytics_id} />
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
