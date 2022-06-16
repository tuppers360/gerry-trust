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
      <div className="mx-auto mt-4 max-w-xl px-4 pt-12 text-center sm:px-6 lg:max-w-5xl lg:px-8">
        <h1 className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text py-4 text-5xl font-bold text-transparent lg:text-6xl">
          {story.title}
        </h1>
        <h2 className="mt-4 text-slate-600 dark:text-slate-300 md:text-xl">
          Published -&nbsp;
          {format(parseISO(story.publishedAt), 'dd MMMM yyyy')}
        </h2>
        <div className="inline-flex items-center p-2">
          {story.author && <h3>written by {story.author.name}</h3>}
        </div>
        <div className="text flex items-center justify-center space-x-2 p-2 text-sm text-slate-500">
          <span className="inline-flex items-center">
            <BookOpenIcon className="mr-2 inline-block h-5 w-5" />
            {story.readingTime.text}
          </span>
          <span>{` • `}</span>
          <span className="inline-flex items-center">
            <EyeIcon className="mr-2 h-5 w-5" />
            <ViewCounter slug={story.slug} />
          </span>
        </div>
      </div>
      <article className="mx-auto mt-8 flex max-w-xl flex-col items-start justify-center px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="prose w-full max-w-none dark:prose-invert md:prose-lg">
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
