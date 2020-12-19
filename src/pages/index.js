import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='SAAS'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
    </Layout>
  );
};

export default IndexPage;
