import * as React from 'react';
import DonorsPage from '../components/Event/DonorsPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

// markup
const AllDonorVisits = () => {
  return (
    <Layout pageTitle='Donors'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='All Donor Visits' crumbTitle='Donor Visits' />
      <DonorsPage />
      <Footer />
    </Layout>
  );
};

export default AllDonorVisits;
