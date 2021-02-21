import React, { useState } from 'react';

import Container from 'components/Container';
import PageHeaderSection from 'components/PageHeaderSection';
import StoryCard from 'components/StoryCard';
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
      <PageHeaderSection
        title="Stories"
        heading="Read about who we have helped support along the way"
      >{`Here are some of the stories of those we have helped along the way. In total, we have ${stories.length} stories so far with many more to come.
      Use the search below to filter by title of the stories`}</PageHeaderSection>

      <div className="flex flex-col justify-center items-start mx-auto px-4 max-w-md sm:max-w-lg lg:max-w-7xl sm:px-6 lg:px-8">
        <div className="relative w-full max-w-md lg:max-w-4xl mx-auto mt-4 px-4">
          <input
            aria-label="Search stories"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search stories"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-cyan-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-6 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
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
        {/* //TODO - style No Posts Found */}
        {!filteredBlogPosts.length && 'No posts found.'}
        {filteredBlogPosts && (
          <div className="relative">
            <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl">
              {filteredBlogPosts.map((frontMatter) => (
                <StoryCard key={frontMatter.title} {...frontMatter} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Stories;

export async function getStaticProps() {
  const stories = await getAllFilesFrontMatter('stories');

  return { props: { stories } };
}
