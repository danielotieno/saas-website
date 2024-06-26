import * as React from 'react';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import Layout from '../../components/Navigation/Layout';
import PageHeader from '../../components/Navigation/PageHeader';
import StickyHeader from '../../components/Navigation/StickyHeader';
import NewsPage from '../../components/News/NewsPage';

const News = () => {
  return (
    <Layout pageTitle='News'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='News' crumbTitle='Home' crumbLink='/' />
      <NewsPage />
      <Footer />
    </Layout>
  );
};

export default News;
