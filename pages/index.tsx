import { NextPage } from 'next';
import Layout from '../components/layout';
import HomePageHeader from '../components/homepageheader';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Gerry Richardson Trust">
      <HomePageHeader />
    </Layout>
  );
};

export default IndexPage;
