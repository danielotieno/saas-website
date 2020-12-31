import * as React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import StickyHeader from '../components/StickyHeader';
import BannerSlider from '../components/BannerSlider';
import Service from '../components/Service';
import AboutUs from '../components/AboutUs';
import VideoCard from '../components/VideoCard';
import NeedSponsor from '../components/NeedSponsor';
import CurrentStudents from '../components/CurrentStudents';
import Stories from '../components/Stories';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle='SAAS'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <BannerSlider />
      <Service />
      <AboutUs />
      <VideoCard />
      <NeedSponsor />
      <CurrentStudents />
      <Stories />
      <Partners extraClass='client-carousel__has-top-shadow' />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
