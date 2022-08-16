import { allStories, Story } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';

import PageHeaderSection from 'components/PageHeaderSection';
import { pick } from 'contentlayer/client';
import { compareDesc } from 'date-fns';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import Link from 'next/link';
import { NextPageWithLayout } from 'pages/_app';
import useSWR from 'swr';

function StoryCard({ title, publishedAt, summary, coverImage, slug }: Story) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={`/stories/${slug}`}>
      <article className="group flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5 transition duration-200 hover:scale-[1.02] dark:shadow-md dark:shadow-sky-500/60">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover lg:h-72"
            src={coverImage}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-sky-600">Story</p>
            <p className="mt-2 text-xl font-semibold text-slate-700 group-hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-slate-500">{summary}</p>
          </div>
          <div className="mt-8 flex justify-between text-sm text-slate-400">
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

const Stories: NextPageWithLayout = ({ stories }: { stories: Story[] }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredstories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <PageHeaderSection
        title="Stories"
        heading="Read about who we have helped support along the way"
      >{`Here are some of the stories of those we have helped along the way. In total, we have stories so far with many more to come.
      Use the search below to filter by title of the stories`}</PageHeaderSection>

      <div className="mx-auto flex max-w-md flex-col items-start justify-center px-4 dark:text-slate-400 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative mx-auto w-full max-w-md px-4 lg:max-w-xl">
          <input
            aria-label="Search stories"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search stories"
            className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-slate-900 focus:border-cyan-500 focus:ring-gray-500 dark:border-gray-900 dark:text-slate-100"
          />
          <svg
            className="absolute right-6 top-3 h-5 w-5 text-slate-400 dark:text-slate-500"
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
            <div className="mx-auto grid max-w-md gap-8 px-4 pt-12 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 xl:grid-cols-3">
              {filteredstories.map((story) => (
                <StoryCard key={story.title} {...story} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
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

  return {
    props: {
      stories,
      title: 'Stories - The Gerry Richardson Trust',
      description: 'A list of stories from those we have helped along the way'
    }
  };
}
