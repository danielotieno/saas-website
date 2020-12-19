module.exports = {
  siteMetadata: {
    title: 'SAAS Charity Website',
    description: 'This is a website SAAS Charity NGO from Mombasa, Kenya',
    siteUrl: '#',
    twitterUsername: '@ProGasKe',
    keywords: ['Saas', 'Charity', 'Donate', 'Mombasa'],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      __key: `images`,
    },
  ],
};
