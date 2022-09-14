import * as React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

// markup
const News = () => {
  return (
    <Layout pageTitle='SAAS Events Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Our Events' crumbTitle='Events' />
      <Footer />
    </Layout>
  );
};

export default News;
