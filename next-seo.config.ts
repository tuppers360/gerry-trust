const title = 'Gerry Richardson Trust';
const description =
  'What you donate helps us regardless of when and how you give, as a single donation or monthly payment it all helps.';
const SEO = {
  title,
  description,
  canonical: 'https://gerryrichardsontrust.org',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://gerryrichardsontrust.org',
    title,
    description,
    images: [
      {
        url: 'https://gerryrichardsontrust.org/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@gerrytrust',
    site: 'https://twitter.com/gerrytrust',
    cardType: 'summary_large_image',
  },
};
export default SEO;
