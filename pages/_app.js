import 'styles/globals.scss';
import 'styles/nprogress.scss';

import Layout from 'components/layout/Layout';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/misc/saber.gif" />
        <title>Next.StarWar - All the Star Wars data you've ever wanted</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
