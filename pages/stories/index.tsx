import Layout from '../../components/Layout';
import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Intro from '../../components/stories/StoriesIntro';
import HeroPost from '../../components/stories/StoriesHeroPost';
import MoreStories from '../../components/stories/StoriesPost';
import Container from '../../components/stories/StoriesContainer';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>GRT - Stories</title>
        </Head>
        <Container>
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
        </Container>
      </Layout>
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
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
