import { CMS_NAME } from 'lib/constants';
import Container from 'components/Container';
import HeroPost from 'components/stories/StoriesHeroPost';
import Intro from 'components/stories/StoriesIntro';
import MoreStories from 'components/stories/StoriesPost';
import StoriesContainer from 'components/stories/StoriesContainer';
import { getAllPosts } from 'lib/api';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Container title="The Gerry Richardson Trust">
        <StoriesContainer>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </StoriesContainer>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
}
