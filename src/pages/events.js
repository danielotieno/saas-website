import * as React from 'react';
import EventPage from '../components/Events/EventPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

// markup
const Events = () => {
  return (
    <Layout pageTitle='Our Events At SAAS Charity'>
      <Header />
      <PageHeader title='Our Events' crumbTitle='Events' />
      <EventPage />
      <Footer />
    </Layout>
  );
};

export default Events;
