import Image from 'next/image';
import Link from 'next/link';

//TODO - build these as we move along adding the Blog etc
// import Tweet from 'react-tweet-embed';

// import ProsCard from '@/components/ProsCard';
// import ConsCard from '@/components/ConsCard';
// import Unsplash from '@/components/metrics/Unsplash';
// import Analytics from '@/components/metrics/Analytics';
// import YouTube from '@/components/metrics/Youtube';
// import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink

  //TODO - as above build these as we add the blog
  //   Analytics,
  //   ConsCard,
  //   ProsCard,
  //   Step,
  //   Tweet,
  //   Unsplash,
  //   YouTube
};

export default MDXComponents;
