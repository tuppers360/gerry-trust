import 'styles/tailwind.css';

import type { AppProps } from 'next/app';
import MDXComponents from 'components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
