import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="antialiased bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
