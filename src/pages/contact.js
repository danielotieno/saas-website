import * as React from 'react';
import Layout from '../components/Navigation/Layout';
import PagesNavbar from '../components/Navigation/PagesNavbar';
import PageHeader from '../components/Navigation/PageHeader';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import Footer from '../components/Navigation/Footer';

const Contact = () => {
  return (
    <Layout pageTitle='Contact Us Page'>
      <PagesNavbar />
      <PageHeader title='Contact Us' crumbTitle='Contact' />
      <ContactForm />
      <GoogleMap extraClass='contact' />
      <Footer />
    </Layout>
  );
};

export default Contact;
