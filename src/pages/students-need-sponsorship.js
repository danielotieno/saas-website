import React from 'react';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import WaitingList from '../components/Waiting/WaitingList';

const WaitingStudentList = () => {
  return (
    <Layout pageTitle='All Students in Waiting List Page'>
      <Header />
      <PageHeader title='Waiting List' crumbTitle='Waiting' />
      <WaitingList />
      <Footer />
    </Layout>
  );
};

export default WaitingStudentList;
