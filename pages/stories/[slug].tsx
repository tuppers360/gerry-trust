import { Story, allStories } from 'contentlayer/generated';
import { getFileBySlug, getFiles } from 'lib/mdx';

import Image from 'next/image';
import StoryLayout from 'layouts/story';
import components from 'components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function StoryPage({ story }: { story: Story }) {
  const Component = useMDXComponent(story.body.code);
  return (
    <StoryLayout story={story}>
      <Component components={{ ...components }} />
    </StoryLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allStories.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const story = allStories.find((post) => post.slug === params.slug);

  return { props: { story } };
}
