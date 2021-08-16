import React from 'react';
import AllCurrentStudents from '../components/Current/AllCurrentStudents';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import Layout from '../components/Navigation/Layout';
import PageHeader from '../components/Navigation/PageHeader';

const CurrentStudentsList = () => {
  return (
    <Layout pageTitle='Our students who have sponsorship'>
      <Header />
      <PageHeader title='Our Current Students' crumbTitle='Current' />
      <AllCurrentStudents />
      <Footer />
    </Layout>
  );
};

export default CurrentStudentsList;
