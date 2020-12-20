import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';
import BannerSlider from '../components/BannerSlider';
import Service from '../components/Service';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='SAAS'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <BannerSlider />
      <Service />
    </Layout>
  );
};

export default IndexPage;
