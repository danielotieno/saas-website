import * as React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import NewsPage from '../components/News/NewsPage';

// markup
const News = () => {
  return (
    <Layout pageTitle='SAAS Newsletters Page'>
      <Header />
      <PageHeader title='SAAS Newsletters' crumbTitle='News' />
      <NewsPage />
      <Footer />
    </Layout>
  );
};

export default News;
