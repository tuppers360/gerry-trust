import React, { useState } from 'react';

import BlogPost from 'components/BlogPost';
import Container from 'components/Container';
import PageHeaderSection from 'components/PageHeaderSection';
import { getAllFilesFrontMatter } from 'lib/mdx';

function Stories({ stories }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = stories
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <Container>
      <PageHeaderSection heading="Some of our Stories" />
      <main className="flex flex-col justify-center items-start max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 m-4">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`Here are some of the stories of those we have helped along the way. In total, we have ${stories.length} stories so far with many more to come.
            Use the search below to filter by title of the stories`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && 'No posts found.'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </main>
    </Container>
  );
}

export default Stories;

export async function getStaticProps() {
  const stories = await getAllFilesFrontMatter('stories');

  return { props: { stories } };
}
