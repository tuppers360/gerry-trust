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
      <a className="flex flex-col rounded-lg shadow-lg overflow-hidden group">
        <div className="flex-shrink-0">
          <img
            className="h-48 lg:h-72 w-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-cyan-600">Story</p>
            <p className="text-xl font-semibold text-gray-700 mt-2 group-hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">{summary}</p>
          </div>
          <div className="mt-8 flex text-sm justify-between text-gray-400">
            <div className="inline-flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="eye"
                className="inline-block w-5 h-5 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                ></path>
              </svg>
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

        {/* <div classNameName="flex-shrink-0">
          <img
            classNameName="h-56 lg:h-72 w-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <div classNameName="flex-1 bg-gray-50 px-6 py-3 flex flex-col justify-between"> 
          <div classNameName="h-0 flex-1">
            <p classNameName="sm:text-lg sm:leading-snug font-semibold tracking-wide text-blue-600 mt-4">
              Written by {author}
            </p>
            <h1 classNameName="text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 mt-4 hover:underline">
              {title}
            </h1>
            <p classNameName="mt-4 text-lg font-medium text-gray-500">{summary}</p>
          </div>
          <div classNameName="mt-8 flex text-sm justify-between text-gray-400">
            <div classNameName="inline-flex items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="eye"
                classNameName="inline-block w-5 h-5 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"
                ></path>
              </svg>
              <ViewCounter slug={slug} />
            </div>
            <div>
              Published -
              <span classNameName="ml-1">
                {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
              </span>
            </div>
          </div>
        </div>*/}
      </a>
    </Link>
  );
};

export default Post;
