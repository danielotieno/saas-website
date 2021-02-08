import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import PagesNavbar from '../components/Navigation/PagesNavbar';
import PageHeader from '../components/Navigation/PageHeader';
import DonationPage from '../components/About/DonationPage';
import Footer from '../components/Navigation/Footer';

const Donation = () => {
  return (
    <Layout pageTitle='Donation Page'>
      <PagesNavbar />
      <PageHeader title='Donate Now' crumbTitle='Donation' />
      <DonationPage />
      <Footer />
    </Layout>
  );
};

export default Donation;
