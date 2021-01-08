import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import PagesNavbar from '../components/Navigation/PagesNavbar';
import PageHeader from '../components/Navigation/PageHeader';
import EventPage from '../components/Events/EventPage';
import Footer from '../components/Navigation/Footer';

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
