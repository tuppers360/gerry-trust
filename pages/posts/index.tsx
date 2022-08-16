import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

import Link from 'next/link';
import { NextPageWithLayout } from 'pages/_app';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <h2 className="text-lg">
        <Link href={`/posts/${post.slug}`}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
    </div>
  );
}

const PostsPage: NextPageWithLayout = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mx-auto flex max-w-md flex-col items-start justify-center px-4 dark:text-slate-400 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default PostsPage;
