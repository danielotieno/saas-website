import { GatsbySeo } from 'gatsby-plugin-next-seo';
import * as React from 'react';
import AboutUs from '../components/About/AboutUs';
import BannerSlider from '../components/BannerSlider';
import CurrentStudents from '../components/Current/CurrentStudents';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import StickyHeader from '../components/Navigation/StickyHeader';
import Partners from '../components/Partners';
import Service from '../components/Service';
import AllStories from '../components/Stories/AllStories';
import VideoCard from '../components/VideoCard';
import NeedSponsor from '../components/Waiting/NeedSponsor';

// markup
const IndexPage = () => {
  return (
    <>
      <GatsbySeo
        title='SAAS - Sponsor an African Scholar'
        description='SAAS - Sponsor an African Scholar is an Irish charity (Charity Number CHY 17318) that provides sustainable solutions to communities in Kenya.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS - Sponsor an African Scholar',
          description:
            'SAAS - Sponsor an African Scholar is an Irish charity (Charity Number CHY 17318) that provides sustainable solutions to communities in Kenya.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
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
    </>
  );
};

export default IndexPage;
