import * as React from 'react';
import DonationPage from '../components/About/DonationPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

const Donation = () => {
  return (
    <Layout pageTitle='Donation Page'>
      <Header />
      <PageHeader title='Donate Now' crumbTitle='Donation' />
      <DonationPage />
      <Footer />
    </Layout>
  );
};

export default Donation;
