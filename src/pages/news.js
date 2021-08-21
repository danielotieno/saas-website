import * as React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';
import NewsPage from '../components/News/NewsPage';

// markup
const News = () => {
  return (
    <Layout pageTitle='SAAS Newsletters Page'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='SAAS Newsletters' crumbTitle='News' />
      <NewsPage />
      <Footer />
    </Layout>
  );
};

export default News;
