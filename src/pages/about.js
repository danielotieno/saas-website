import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import PagesNavbar from '../components/Navigation/PagesNavbar';
import PageHeader from '../components/Navigation/PageHeader';
import AboutPage from '../components/About/AboutPage';
import Footer from '../components/Navigation/Footer';

// markup
const About = () => {
  return (
    <Layout pageTitle='About SAAS Charity'>
      <PagesNavbar />
      <PageHeader title='About Us' crumbTitle='About' />
      <AboutPage />
      <Footer />
    </Layout>
  );
};

export default About;
