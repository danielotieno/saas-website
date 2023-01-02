module.exports = {
  plugins: [
    `gatsby-plugin-image`,
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
          cardType:
            'https://saas.ie/static/saas-777abe5bdc607226f8f7aeffd933f9fb.png',
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
