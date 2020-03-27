import React from "react";
import Layout from '../components/layout';
import SEO from "../components/seo";
import Introduction from "../components/introduction";
import PPT from '../components/PPT';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <PPT />
  </Layout>
)

export default IndexPage;

