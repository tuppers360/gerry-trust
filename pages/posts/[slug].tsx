import { Post, allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import Link from 'next/link';
import { NextPage } from 'next';

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}

const PostLayout: NextPage = ({ post }: { post: Post }) => {
  return (
    <Container>
      <article className="max-w-2xl py-16 mx-auto">
        <div className="mb-6 text-center">
          <Link href="/posts">
            <a className="text-sm font-bold text-center text-blue-700 uppercase">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </Container>
  );
};

export default PostLayout;
