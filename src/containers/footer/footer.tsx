import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SocialProfile from '../../components/social-profile/social-profile';
const _ = require('lodash');
import FooterWrapper, {
  FooterWrapperInner,
  FooterCol,
  Logo,
  Infos,
  FooterTitle,
  FooterContent,
  Menu,
} from './footer.style';
import LogoImage from '../../images/logo.svg';

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

const MenuItems = [
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Blog',
    url: 'https://blog.vehicle24x7.com/',
  },
  {
    label: 'Download App',
    url: 'https://www.vehicle24x7.com/',
  },
];

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/vehicle24x7/',
    tooltip: 'Vehicle 24x7 on Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/vehicle24x7/',
    tooltip: 'Vehicle 24x7 on Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/Vehicle24x7',
    tooltip: 'Vehicle 24x7 on Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/vehicle24x7/',
    tooltip: 'Vehicle 24x7 on Linkedin',
  },
];

type FooterProps = {
  children: React.ReactNode;
};

const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  const Category = data.allMarkdownRemark.group;

  return (
    <FooterWrapper {...props}>
      <FooterWrapperInner>
        <FooterCol>
          <Logo>
            <Link to="/">
              <img src={LogoImage} alt="logo" />
            </Link>
          </Logo>
          <br />
          <Infos>
            Copyright &copy; {new Date().getFullYear()}&nbsp;
            <a href="https://prolongservices.com/" target="_blank">
              Prolong Services
            </a>
          </Infos>
        </FooterCol>

        <FooterCol>
          <FooterTitle>Quick Links</FooterTitle>

          <FooterContent>
            {MenuItems.map((item, index) => (
              <Menu key={index} to={item.url}>
                {item.label}
              </Menu>
            ))}
          </FooterContent>
        </FooterCol>

        <FooterCol>
          <FooterTitle>Category</FooterTitle>

          <FooterContent>
            {Category.slice(0, 4).map((cat: any, index: any) => (
              <Menu key={index} to={`/category/${_.kebabCase(cat.fieldValue)}`}>
                {cat.fieldValue}
              </Menu>
            ))}
          </FooterContent>
        </FooterCol>

        <FooterCol>
          <FooterTitle>Follow Us</FooterTitle>

          <SocialProfile items={SocialLinks} />
        </FooterCol>
      </FooterWrapperInner>
    </FooterWrapper>
  );
};

export default Footer;
