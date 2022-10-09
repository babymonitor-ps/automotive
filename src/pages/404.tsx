import React from 'react';
import { graphql } from 'gatsby';
import ResetCss from '../components/reset-css';
import SEO from '../components/seo';
import NotFound from '../containers/not-found';
import Footer from "../containers/footer/footer";

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <SEO title="404: Not Found" />
      <NotFound />
        <Footer>
            Copyright &copy; {new Date().getFullYear()}
            <a href="https://prolongservices.com/" target="_blank"> Prolong Services</a>
        </Footer>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
