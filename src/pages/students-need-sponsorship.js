import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';
import WaitingList from '../components/Waiting/WaitingList';

const WaitingStudentList = () => {
  return (
    <>
      <GatsbySeo
        title='Waiting Students'
        description='SAAS Charity | Below is a list of the students on our reserved list awaiting sponsors. If you are interested in sponsoring any of these students kindly email us at info@saas.ie. Thank you.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://saas.ie/',
          title: 'SAAS | Sponsor Student Charity',
          description:
            'SAAS Charity | Below is a list of the students on our reserved list awaiting sponsors. If you are interested in sponsoring any of these students kindly email us at info@saas.ie. Thank you.',
          images: [
            {
              url: 'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
            },
          ],
        }}
      />
      <Layout pageTitle='All Students in Waiting List Page'>
        <Header />
        <StickyHeader extraClassName='stricky-header-two' />
        <PageHeader title='Students Need Sponsorship' crumbTitle='Waiting' />
        <WaitingList />
        <Footer />
      </Layout>
    </>
  );
};

export default WaitingStudentList;
