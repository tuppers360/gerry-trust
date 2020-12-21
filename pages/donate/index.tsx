import { NextPage } from 'next';
import DonationForm from '../../components/DonationForm';
import PageHeaderSection from '../../components/PageHeaderSection';
import Layout from '../../components/Layout';

//import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Gerry Richardson Trust | Make a Donation">
      <main>
        <PageHeaderSection heading="Make a Donation" center>
          <p>
            Donate to help us to help the local youths of Blackpool, Fylde and
            Wyre 💖
          </p>
        </PageHeaderSection>
      </main>
      <div className="max-w-xl mx-auto m-16 px-4">
        <DonationForm />
      </div>
    </Layout>
  );
};

export default DonatePage;
