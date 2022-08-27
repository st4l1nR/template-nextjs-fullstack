import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import client from '@lib/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Full Stack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
