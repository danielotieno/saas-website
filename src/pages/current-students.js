import React from 'react';
import AllCurrentStudents from '../components/Current/AllCurrentStudents';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';
import StickyHeader from '../components/Navigation/StickyHeader';

const CurrentStudentsList = () => {
  return (
    <Layout pageTitle='Current Students'>
      <Header />
      <StickyHeader extraClassName='stricky-header-two' />
      <PageHeader title='Our Current Students' crumbTitle='Current' />
      <AllCurrentStudents />
      <Footer />
    </Layout>
  );
};

export default CurrentStudentsList;
