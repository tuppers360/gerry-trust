import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
