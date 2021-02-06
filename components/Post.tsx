import { format, parseISO } from 'date-fns';

import Link from 'next/link';

//TODO - add views for each article
//import useSWR from 'swr';
//import format from 'comma-number';

//import fetcher from '@/lib/fetcher';

const Post = ({ title, summary, publishedAt, image, slug }) => {
  //   const { data } = useSWR(`/api/views/${slug}`, fetcher);
  //   const views = data?.total;

  return (
    <Link href={`/stories/${slug}`}>
      <a>
        <article className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={image} alt="" />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500">
                Published
                <span className="block text-base text-gray-700">
                  {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                </span>
              </p>
              <h1 className="text-xl font-semibold text-gray-800 mt-4">
                {title}
              </h1>
              <p className="mt-3 text-base text-gray-500">{summary}</p>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex space-x-1 text-sm text-gray-500">
                {/* <span aria-hidden="true">&middot;</span>
                    <span>6 min read</span> */}
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Post;
