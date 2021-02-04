import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import PageHeaderSection from 'components/PageHeaderSection';

//TODO - add these components later
// import Subscribe from '@/components/Subscribe';
// import ViewCounter from '@/components/ViewCounter';

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
          <>
            <p className="text-base text-gray-600 min-w-32 mt-8 md:mt-8">
              written by
            </p>
            <p className="mt-4 text-base md:text-xl">{frontMatter.author}</p>
          </>
        )}
        <p className="text-sm text-gray-500 min-w-32 mt-4 md:mt-4">
          {frontMatter.readingTime.text}
          {/* {` • `}
          <ViewCounter slug={frontMatter.slug} /> */}
        </p>
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
