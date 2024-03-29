import { GatsbySeo } from 'gatsby-plugin-next-seo';
import * as React from 'react';
import GoogleMap from '../components/Contact/GoogleMap';
import Thanks from '../components/Contact/Thanks';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const ThankYou = () => {
  return (
    <>
      <GatsbySeo
        title='Thank You'
        description='SAAS Charity | You do not like forms? Email us at info@saas.ie with any question or inquiries or call +353 (0)87 2803823 / 254 (0) 41 476396 . We would be happy to answer your questions.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS | Thank You SAAS Charity',
          description:
            'SAAS Charity | SAAS runs a sponsorship programme which enables Kenyan students from marginalised communities to attend post primary education. This sponsorship is coupled with free student services such as counselling and career guidance.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
      <Layout pageTitle='Thank You Page'>
        <Header />
        <StickyHeader extraClassName='stricky-header-two' />
        <PageHeader title='Thank You' crumbTitle='Thank You' />
        <Thanks />
        <GoogleMap extraClass='contact' />
        <Footer />
      </Layout>
    </>
  );
};

export default ThankYou;
