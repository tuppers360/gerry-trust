import { getFileBySlug, getFiles } from 'lib/mdx';

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import StoryLayout from 'layouts/story';

const mdxComponents = {
  Image
};

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <StoryLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </StoryLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('stories');

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
  const post = await getFileBySlug('stories', params.slug);

  return { props: post };
}
