import * as React from "react";
import MathsCamp2024Page from "../../../components/Event/MathsCamp2024Page";
import Footer from "../../../components/Navigation/Footer";
import Header from "../../../components/Navigation/Header";
import Layout from "../../../components/Navigation/Layout";
import PageHeader from "../../../components/Navigation/PageHeader";
import StickyHeader from "../../../components/Navigation/StickyHeader";

const MathsCamp2024 = () => {
  return (
    <Layout pageTitle="Maths Camp">
      <Header />
      <StickyHeader extraClassName="stricky-header-two" />
      <PageHeader
        title="Maths Camp 2024"
        crumbTitle="Events"
        crumbLink="/events"
      />
      <MathsCamp2024Page />
      <Footer />
    </Layout>
  );
};

export default MathsCamp2024;
