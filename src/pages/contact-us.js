import { GatsbySeo } from 'gatsby-plugin-next-seo';
import * as React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const Contact = () => {
  return (
    <>
      <GatsbySeo
        title='Contact SAAS'
        description='SAAS Charity | You do not like forms? Email us at info@saas.ie with any question or inquiries or call +353 (0)87 2803823 / 254 (0) 41 476396 . We would be happy to answer your questions.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS | Contact SAAS Charity',
          description:
            'SAAS Charity | SAAS runs a sponsorship programme which enables Kenyan students from marginalised communities to attend post primary education. This sponsorship is coupled with free student services such as counselling and career guidance.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
      <Layout pageTitle='Contact Us Page'>
        <Header />
        <StickyHeader extraClassName='stricky-header-two' />
        <PageHeader title='Contact Us' crumbTitle='Home' crumbLink='/' />
        <ContactForm />
        <GoogleMap
          extraClass='contact'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8638377584575!2d39.68709011185733!3d-4.04818874486821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184013cf5f7664a7%3A0x14b74ef130c74a6!2sSponsor%20An%20Africa%20Scholar%20(SAAS)!5e0!3m2!1sen!2ske!4v1689585410801!5m2!1sen!2ske'
        />
        <GoogleMap
          extraClass='contact'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.3254138011253!2d-6.238924384297505!3d53.355330881739526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670ef5ced3db03%3A0x2833d255ddb0b632!2s24%20Fairfield%20Ave%2C%20East%20Wall%2C%20Dublin%2C%20D03%20TE27%2C%20Ireland!5e0!3m2!1sen!2ske!4v1625476716453!5m2!1sen!2ske'
        />
        <Footer />
      </Layout>
    </>
  );
};

export default Contact;
