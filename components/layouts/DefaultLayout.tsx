import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
  children?: ReactNode;
}

export default function DefaultLayout(props: LayoutProps) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'The Gerry Richardson Trust',
    description:
      'Our mission promote youth development by supporting young people, aged 25 or under, to attend courses and activities of an educational, cultural, sporting, adventuresome or character-building nature. It is willing to entertain written applications for financial assistance from young people living or working within 15 miles of the town hall in Blackpool, Lancashire.',
    image: '',
    type: 'website',
    date: null,
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gerryrichardsontrust.org${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="The Gerry Richardson Trust" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gerrytrust" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main id="skip" className="mb-48">
        {children}
      </main>
      <Footer />
    </>
  );
}
