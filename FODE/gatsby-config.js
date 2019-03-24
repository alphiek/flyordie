require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `House of FODE`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `RKK Creative`,
    name: "FLY OR DIE ENTERPRISES",
    street: "Such and such address",
    city: "London",
    country: "UK",
    email: "info@fode.org.uk",
    fb: "https://www.facebook.com/houseoffode/",
    insta: "https://www.instagram.com/houseoffode/",
    menuLinks: [
      {
        name: "New Arrivals",
        link: "/newarrivals"
      },
      {
        name: "Shop",
        link: "/shop"
      },
      {
        name: "Faqs",
        link: "/faqs"
      },
      {
        name: "Home",
        link: "/"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `http://localhost:8000`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
        previewMode: true,
        disableLiveReload: false,
        apiUrl: "https://site-api.datocms.com"
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIP_API_KEY,
        autopop: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `house-of-fode`,
        short_name: `fode`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/fode-logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
