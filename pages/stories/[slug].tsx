import { BookOpenIcon, EyeIcon } from '@heroicons/react/outline';
import { Story, allStories } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import components from 'components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function StoryPage({ story }: { story: Story }) {
  const Component = useMDXComponent(story.body.code);

  return (
    <Container
      title={`${story.title} – Gerry Richardson Trust`}
      description={story.summary}
      image={`https://gerryrichardsontrust.org/stories/${story.coverImage}`}
      date={new Date(story.publishedAt).toISOString()}
      type="article"
    >
      <div className="max-w-xl px-4 pt-12 mx-auto mt-4 text-center sm:px-6 lg:max-w-5xl lg:px-8">
        <h1 className="py-4 text-5xl font-bold text-transparent bg-clip-text lg:text-6xl bg-gradient-to-r from-blue-900 to-blue-500">
          {story.title}
        </h1>
        <h2 className="mt-4 text-gray-600 md:text-xl dark:text-gray-300">
          Published -&nbsp;
          {format(parseISO(story.publishedAt), 'dd MMMM yyyy')}
        </h2>
        <div className="inline-flex items-center p-2">
          {story.author && <h3>written by {story.author.name}</h3>}
        </div>
        <div className="p-2 text-sm text-gray-500 text">
          <span className="inline-flex items-center">
            <EyeIcon className="w-5 h-5 mr-2" />
            <ViewCounter slug={story.slug} />
          </span>
        </div>

        <div className="flex justify-between mt-4 text-sm text-gray-500 text">
          <div className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center">
              <BookOpenIcon className="inline-block w-5 h-5 mr-2" />
              {story.readingTime.text}
            </span>
            <span>{` • `}</span>
            <span className="inline-flex items-center">
              <EyeIcon className="w-5 h-5 mr-2" />
              <ViewCounter slug={story.slug} />
            </span>
          </div>
        </div>
      </div>
      <article className="flex flex-col items-start justify-center max-w-xl px-4 mx-auto mt-8 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="w-full prose md:prose-lg dark:prose-dark max-w-none">
          <Component components={{ ...components }} />
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: allStories.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const story = allStories.find((story) => story.slug === params.slug);

  return { props: { story } };
}
