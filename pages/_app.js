import '../styles/_globals.scss';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
      <Head>
        <title>Infoverse Tech Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  return <Component {...pageProps} />
}

export default MyApp
