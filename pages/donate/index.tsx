import { NextPage } from 'next';
import DonationForm from '../../components/donationform';
import Header from '../../components/header';
import Layout from '../../components/layout';

//import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Donate with Checkout | Next.js + TypeScript Example">
      <main>
        <Header heading="Donate with Checkout">
          <p>Donate to our project 💖</p>
        </Header>
      </main>
      <div className="content_section">
        <div className="container">
          Testing 1 2 3<DonationForm />
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
