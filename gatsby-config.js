require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const urljoin = require('url-join');
const { themeGet } = require('@styled-system/theme-get')

module.exports = {
  siteMetadata: {
    title: `${process.env.TITLE}`,
    author: `pawneshwer`,
    about: `${process.env.DESCRIPTION}`,
    tagLine: `${process.env.TAG_LINE}`,
    description: `${process.env.DESCRIPTION}`,
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: 'static',
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-reading-time`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    /*{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS, // `ADD YOUR TRACKING ID HERE`,
      },
    },*/
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            name: 'rss',
            query: `
            {
              allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]},
                limit: 100,
                ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      date
                      title
                      description
                    }
                  }
                }
              }
            }
            `,
            normalize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: urljoin(site.siteMetadata.siteUrl, edge.node.fields.slug),
                  html: edge.node.html,
                  description: edge.node.frontmatter.description ? edge.node.frontmatter.description : edge.node.excerpt
                }
              })
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${process.env.TITLE}`,
        short_name: `${process.env.TITLE}`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `${themeGet('colors.primary', '#663399')}`,
        display: `standalone`,
        icon: `content/assets/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Poppins:100,200,300,400,500,600,700',
            'Roboto:100,300,400,500,600,700',
          ],
        },
      },
    },
  ],
};
