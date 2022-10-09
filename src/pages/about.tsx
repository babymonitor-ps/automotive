import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import About from '../containers/about';
import { graphql } from "gatsby"

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props: any) => {
    const {data} = props
  return (
    <Layout>
      <SEO
        title="About Us"
        slug={`about`}
        description={data.site.siteMetadata.description}
      />

      <About />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        tagLine
      }
    }
  }
`