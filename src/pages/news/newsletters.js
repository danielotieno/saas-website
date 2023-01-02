import * as React from 'react';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import Layout from '../../components/Navigation/Layout';
import PageHeader from '../../components/Navigation/PageHeader';
import StickyHeader from '../../components/Navigation/StickyHeader';
import NewsLetterPage from '../../components/News/NewsLetterPage';

// markup
const NewsLetter = () => {
  return (
    <Layout pageTitle='NewsLetters'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Newsletters' crumbTitle='News' crumbLink='/news' />
      <NewsLetterPage />
      <Footer />
    </Layout>
  );
};

export default NewsLetter;
