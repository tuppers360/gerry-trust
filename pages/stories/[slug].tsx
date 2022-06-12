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
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 mt-4 pt-12">
        <h1 className="bg-clip-text text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-blue-900 to-blue-500 font-bold py-4">
          {story.title}
        </h1>
        <h2 className="text-gray-600 md:text-xl dark:text-gray-300 mt-4">
          Published -&nbsp;
          {format(parseISO(story.publishedAt), 'dd MMMM yyyy')}
        </h2>

        <div className="mt-4 flex justify-between text-gray-500 text-sm">
          <div className="inline-flex items-center">
            {story.author && <h3>written by {story.author.name}</h3>}
          </div>
          <div className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center">
              <BookOpenIcon className="inline-block w-5 h-5 mr-2" />
              Reading Time
            </span>
            <span>{` • `}</span>
            <span className="inline-flex items-center">
              <EyeIcon className="w-5 h-5 mr-2" />
              <ViewCounter slug={story.slug} />
            </span>
          </div>
        </div>
      </div>
      <article className="flex flex-col justify-center items-start max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 mt-8">
        <div className="prose md:prose-lg dark:prose-dark max-w-none w-full">
          <Component components={{ ...components }} />
        </div>
        {/* <div className="mt-8"><Subscribe /></div> */}
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: allStories.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const story = allStories.find((post) => post.slug === params.slug);

  return { props: { story } };
}
