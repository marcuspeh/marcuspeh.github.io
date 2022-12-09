import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Marcus Peh</title>
      <meta name="description" content="Marcus Peh's Portfolio" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>
}
