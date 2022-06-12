import React, { useState } from 'react';
import { Story, allStories } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import Link from 'next/link';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { compareDesc } from 'date-fns';
import { pick } from 'contentlayer/client';

function StoryCard({ title, publishedAt, summary, coverImage, slug }: Story) {
  return (
    <Link href={`/stories/${slug}`}>
      <a className="flex flex-col overflow-hidden rounded-lg shadow-lg group">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48 lg:h-72"
            src={coverImage}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
            <p className="text-sm font-medium text-cyan-600">Story</p>
            <p className="mt-2 text-xl font-semibold text-gray-700 group-hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">{summary}</p>
          </div>
          <div className="flex justify-between mt-8 text-sm text-gray-400">
            <div className="inline-flex items-center">
              {/* {`${views ? format(views) : '–––'} views`} */}
            </div>
            <div>
              Published -
              <span className="ml-1">
                {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

const Stories: NextPage = ({ stories }: { stories: Story[] }) => {
  const [searchValue, setSearchValue] = useState('');
  console.log(stories);
  const filteredstories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Container>
      <PageHeaderSection
        title="Stories"
        heading="Read about who we have helped support along the way"
      >{`Here are some of the stories of those we have helped along the way. In total, we have stories so far with many more to come.
      Use the search below to filter by title of the stories`}</PageHeaderSection>

      <div className="flex flex-col items-start justify-center max-w-md px-4 mx-auto sm:max-w-lg lg:max-w-7xl sm:px-6 lg:px-8">
        <div className="relative w-full max-w-md px-4 mx-auto mt-4 lg:max-w-4xl">
          <input
            aria-label="Search stories"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search stories"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-6 top-3 dark:text-gray-300"
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
        {!stories.length && 'No posts found.'}
        {filteredstories && (
          <div className="relative">
            <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl">
              {filteredstories.map((story) => (
                <StoryCard key={story.title} {...story} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Stories;

export async function getStaticProps() {
  const stories = allStories
    .map((story) =>
      pick(story, ['slug', 'title', 'summary', 'publishedAt', 'coverImage'])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });
  return { props: { stories } };
}
