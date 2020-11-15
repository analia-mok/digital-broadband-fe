import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
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
