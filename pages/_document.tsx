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
        <body className="bg-white text-slate-500 antialiased dark:bg-slate-900 dark:text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
