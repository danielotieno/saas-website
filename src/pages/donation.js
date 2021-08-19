import { GatsbySeo } from 'gatsby-plugin-next-seo';
import * as React from 'react';
import DonationPage from '../components/About/DonationPage';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

const Donation = () => {
  return (
    <>
      <GatsbySeo
        title='SAAS | Support SAAS Charity'
        description='SAAS Charity | SAAS requires your support in order to continue providing education to deserving children in Mombasa. School fees cost €420 per year (€35 a month) / £360 per year (£30 a month / £1 a day). However, you can co-sponsor a student with a smaller donation €10, €15 or €20 a month, we have so many students needing sponsorship, every € helps. We are delighted to receive any amount that you can spare.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS | Support SAAS Charity',
          description:
            'SAAS Charity | SAAS requires your support in order to continue providing education to deserving children in Mombasa. School fees cost €420 per year (€35 a month) / £360 per year (£30 a month / £1 a day). However, you can co-sponsor a student with a smaller donation €10, €15 or €20 a month, we have so many students needing sponsorship, every € helps. We are delighted to receive any amount that you can spare.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
      <Layout pageTitle='Donation Page'>
        <Header />
        <PageHeader title='Donate Now' crumbTitle='Donation' />
        <DonationPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Donation;
