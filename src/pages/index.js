import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import Header from '../components/Navigation/Header';
import StickyHeader from '../components/Navigation/StickyHeader';
import BannerSlider from '../components/BannerSlider';
import Service from '../components/Service';
import AboutUs from '../components/About/AboutUs';
import VideoCard from '../components/VideoCard';
import NeedSponsor from '../components/Waiting/NeedSponsor';
import CurrentStudents from '../components/Current/CurrentStudents';
import AllStories from '../components/Stories/AllStories';
import Partners from '../components/Partners';
import Footer from '../components/Navigation/Footer';

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
      <AllStories />
      <Partners extraClass='client-carousel__has-top-shadow' />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
