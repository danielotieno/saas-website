import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import PagesNavbar from '../components/Navigation/PagesNavbar';
import PageHeader from '../components/Navigation/PageHeader';
import NewsPage from '../components/News/NewsPage';
import Footer from '../components/Navigation/Footer';

// markup
const News = () => {
  return (
    <Layout pageTitle='SAAS Newsletters Page'>
      <PagesNavbar />
      <PageHeader title='SAAS Newsletters' crumbTitle='News' />
      <NewsPage />
      <Footer />
    </Layout>
  );
};

export default News;
