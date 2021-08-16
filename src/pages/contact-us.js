import * as React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

const Contact = () => {
  return (
    <Layout pageTitle='Contact Us Page'>
      <Header />
      <PageHeader title='Contact Us' crumbTitle='Contact' />
      <ContactForm />
      <GoogleMap extraClass='contact' />
      <Footer />
    </Layout>
  );
};

export default Contact;
