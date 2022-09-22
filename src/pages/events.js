import * as React from 'react';
import EventsPage from '../components/Event/EventPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

// markup
const Events = () => {
  return (
    <Layout pageTitle='SAAS Events Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Our Events' crumbTitle='Events' />
      <EventsPage />
      <Footer />
    </Layout>
  );
};

export default Events;
