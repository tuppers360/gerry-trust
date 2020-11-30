import { NextPage } from 'next';
import DonationForm from '../../components/donation-form';
import Header from '../../components/header';
import Layout from '../../components/layout';

//import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Gerry Richardson Trust | Make a Donation">
      <main>
        <Header heading="Make a Donation" center>
          <p>
            Donate to help us to help the local youths of Blackpool, Fylde and
            Wyre 💖
          </p>
        </Header>
      </main>
      <div className="content_section">
        <div className="container">
          <DonationForm />
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
