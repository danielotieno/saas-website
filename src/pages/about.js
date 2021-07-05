import * as React from 'react';
import AboutPage from '../components/About/AboutPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

const About = () => {
  return (
    <Layout pageTitle='About SAAS Charity'>
      <Header />
      <PageHeader title='About Us' crumbTitle='About' />
      <AboutPage />
      <Footer />
    </Layout>
  );
};

export default About;
