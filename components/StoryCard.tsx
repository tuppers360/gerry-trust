import { format as formatDate, parseISO } from 'date-fns';

import Link from 'next/link';
import ViewCounter from 'components/ViewCounter';
import fetcher from 'lib/fetcher';
import format from 'comma-number';
import useSWR from 'swr';

const Post = ({ title, summary, publishedAt, author, image, slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/stories/${slug}`}>
      <a className="flex flex-col overflow-hidden rounded-lg shadow-lg group">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48 lg:h-72"
            src={image}
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
              {`${views ? format(views) : '–––'} views`}
            </div>
            <div>
              Published -
              <span className="ml-1">
                {formatDate(parseISO(publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Post;
