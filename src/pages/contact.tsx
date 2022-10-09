import React from 'react';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';
import {graphql} from "gatsby";

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = (props: any) => {
    const {data} = props
    return (
        <Layout>
            <SEO
                title="Contact Us" slug={`contact`}
                description={data.site.siteMetadata.description}
            />

            <Contact/>
        </Layout>
    );
};

export default ContactPage;
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