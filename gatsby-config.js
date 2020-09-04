module.exports = {
  siteMetadata: {
    title: `Pesky Birds`,
    description: `We're a whitelisted community server that like to play semi-vanilla Minecraft on Java 1.16.2`,
    author: `Aurayu, LCFinch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pesky Birds`,
        short_name: `Pesky Birds`,
        start_url: `/`,
        background_color: `#DD123E`,
        theme_color: `#DD123E`,
        display: `standalone`,
        icon: `src/images/pb-square-icon.svg`, // This path is relative to the root of the site.
        legacy: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik', 'Luckiest+Guy']
        }
      }
    }
  ],
}
