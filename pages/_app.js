import 'styles/globals.scss';

import Layout from 'components/layout/Layout';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/misc/saber.gif" />
        <title>Next.SW - All the Star Wars data you've ever wanted</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
