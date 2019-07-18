require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `House of FODE`,
    description: `Existing to Deliver Everything you need to look Fresh, Stylish and Fly!`,
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
        name: "Offers",
        link: "/offers"
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
        disableLiveReload: true,
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
        name: `HouseofFode`,
        short_name: `FODE`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/fode-logo.png`,
        include_favicon: true,
      }
    },
    'gatsby-plugin-offline',
  ]
};
