import { GatsbySeo } from 'gatsby-plugin-next-seo';
import * as React from 'react';
import AboutPage from '../components/About/AboutPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const About = () => {
  return (
    <>
      <GatsbySeo
        title='SAAS | About SAAS'
        description='SAAS | SAAS Charity runs a sponsorship programme which enables Kenyan students from marginalised communities to attend post primary education. This sponsorship is coupled with free student services such as counselling and career guidance.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS | About SAAS',
          description:
            'SAAS | SAAS runs a sponsorship programme which enables Kenyan students from marginalised communities to attend post primary education. This sponsorship is coupled with free student services such as counselling and career guidance.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
      <Layout pageTitle='About SAAS Charity'>
        <Header />
        <StickyHeader extraClassName='stricky-header-two' />
        <PageHeader title='About Us' crumbTitle='About' />
        <AboutPage />
        <Footer />
      </Layout>
    </>
  );
};

export default About;
