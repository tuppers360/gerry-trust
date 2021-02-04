import { getFileBySlug, getFiles } from 'lib/mdx';

import MDXComponents from 'components/MDXComponents';
import StoryLayout from 'layouts/story';
import hydrate from 'next-mdx-remote/hydrate';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <StoryLayout frontMatter={frontMatter}>{content}</StoryLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
