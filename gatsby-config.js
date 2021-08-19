import SaasImage from './src/assets/images/saas-image.png';

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'http://saas.ie/',
          site_name: 'SAAS - Sponsor An Africa Scholar',
        },
        twitter: {
          handle: '@danielotienoke',
          site: '@danielotienoke',
          cardType: SaasImage,
        },
      },
    },
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
