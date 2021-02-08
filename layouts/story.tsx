import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import PageHeaderSection from 'components/PageHeaderSection';
import ViewCounter from 'components/ViewCounter';

//TODO - add these components later
// import Subscribe from '@/components/Subscribe';

export default function StoryLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Lee Robinson`}
      description={frontMatter.summary}
      image={`https://http://localhost:3000/${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <PageHeaderSection heading={frontMatter.title} type="story">
        <p className="text-gray-700 md:text-2xl dark:text-gray-300">
          Published -&nbsp;
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        </p>
        {frontMatter.author && (
          <p className="text-base text-gray-600 min-w-32 mt-4 md:mt-4">
            written by {frontMatter.author}
          </p>
        )}

        <div className="inline-flex items-center text-sm text-gray-500 min-w-32 mt-4 md:mt-4 space-x-4">
          <span className="inline-flex items-center ">
            <svg
              className="inline-block w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            {frontMatter.readingTime.text}
          </span>
          <span>{` • `}</span>
          <span className="inline-flex items-center">
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
            <ViewCounter slug={frontMatter.slug} />
          </span>
        </div>
      </PageHeaderSection>
      <article className="flex flex-col justify-center items-start max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 m-4">
        <div className="prose md:prose-lg dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8">{/* <Subscribe /> */}</div>
      </article>
    </Container>
  );
}
