import * as React from 'react';
import Layout from '../components/Layout';
import PagesNavbar from '../components/PagesNavbar';
import PageHeader from '../components/PageHeader';
import EventPage from '../components/EventPage';

import Footer from '../components/Footer';

// markup
const Events = () => {
  return (
    <Layout pageTitle='Our Events At SAAS Charity'>
      <PagesNavbar />
      <PageHeader title='Our Events' crumbTitle='Events' />
      <EventPage />
      <Footer />
    </Layout>
  );
};

export default Events;
