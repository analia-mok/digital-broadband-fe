import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  // Normally would be pulled from Drupal. Will need to write
  // to write something custom to do it though...
  siteMetadata: {
    title: 'Digital Broadband',
    siteUrl: 'https://digital-broadband.lndo.site',
    description: 'Digital Broadband provides TV, Phone, and Internet services to the wider Hudson Valley.',
    twitter: '@digitalbroadband',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_DRUPAL_SOURCE_URL,
        apiBase: `broadband-api`,
      },
    },
  ],
};
