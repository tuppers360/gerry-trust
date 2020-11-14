import { NextPage } from 'next';
import Layout from '../../components/layout';

import ElementsForm from '../../components/elementsform';

const DonatePage: NextPage = () => {
  return (
    <Layout title="Donate with Elements | Next.js + TypeScript Example">
      <div className="container">
        <h1>Donate with Elements</h1>
        <p>Donate to our project 💖</p>
        <ElementsForm />
      </div>
    </Layout>
  );
};

export default DonatePage;