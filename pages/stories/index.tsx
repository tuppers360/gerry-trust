import React, { useState } from 'react';
import { Story, allStories } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import Link from 'next/link';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { Views } from 'lib/types';
import { compareDesc } from 'date-fns';
import fetcher from 'lib/fetcher';
import { pick } from 'contentlayer/client';
import useSWR from 'swr';

function StoryCard({ title, publishedAt, summary, coverImage, slug }: Story) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={`/stories/${slug}`}>
      <article className="flex flex-col overflow-hidden transition duration-200 rounded-lg shadow-lg dark:shadow-md dark:shadow-sky-500/60 cursor-pointer group hover:scale-[1.02] ring-1 ring-gray-900/5">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48 lg:h-72"
            src={coverImage}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
            <p className="text-sm font-medium text-sky-600">Story</p>
            <p className="mt-2 text-xl font-semibold text-slate-700 group-hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-slate-500">{summary}</p>
          </div>
          <div className="flex justify-between mt-8 text-sm text-slate-400">
            <div className="inline-flex items-center">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </div>
            <div>
              Published -
              <span className="ml-1">
                {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

const Stories: NextPage = ({ stories }: { stories: Story[] }) => {
  const [searchValue, setSearchValue] = useState('');
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

      <div className="flex flex-col items-start justify-center max-w-md px-4 mx-auto sm:max-w-lg lg:max-w-7xl sm:px-6 lg:px-8 dark:text-slate-400">
        <div className="relative w-full max-w-md px-4 mx-auto lg:max-w-xl">
          <input
            aria-label="Search stories"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search stories"
            className="block w-full px-4 py-2 text-slate-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-gray-500 focus:border-cyan-500 dark:text-slate-100"
          />
          <svg
            className="absolute w-5 h-5 text-slate-400 right-6 top-3 dark:text-slate-500"
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
            <div className="grid max-w-md gap-8 px-4 mx-auto pt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-7xl">
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
      pick(story, ['title', 'publishedAt', 'summary', 'coverImage', 'slug'])
    )
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  return { props: { stories } };
}
