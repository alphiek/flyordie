import React from 'react'
import Landing from '../components/Landing/Landing'
import { Helmet } from 'react-helmet'
import { ImageOG } from '../images/Optimized/ImageOG'

const IndexPage = () => (
  <React.Fragment>
  <Helmet>
    <html lang="en"/>
    <title>House of FODE - London made and designed, eco-friendly streetwear</title>
    <meta name="description" content="Existing to Deliver Everything you need to look Fresh, Stylish and Fly!"></meta>

    <meta property="og:url" content="https://fode.org.uk"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="House of FODE - London made and designed, eco-friendly streetwear"></meta>
    <meta property="og:image" content={ImageOG}></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Existing to Deliver Everything you need to look Fresh, Stylish and Fly!"></meta>
    <meta property="og:site_name" content="House of FODE"></meta>

    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:site" content="@fode_of"></meta>
    <meta name="twitter:url" content="https://fode.org.uk"></meta>
    <meta name="twitter:title" content="House of FODE"></meta>
    <meta name="twitter:description" content="London made and designed, eco-friendly streetwear"></meta>
    <meta name="twitter:image" content={ImageOG}></meta>

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "ClothingStore",
            "name": "House of FODE",
            "description": "London made and designed, eco-friendly streetwear",
            "image": "image",
            "logo": "tbc",
            "@id": "https://fode.org.uk/",
            "url": "https://fode.org.uk/",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "postalCode": "",
              "addressCountry": ""
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/houseoffode/",
              "https://www.instagram.com/houseoffode/"
            ],
            "priceRange": "$"
        }
   `}</script>
  </Helmet>
  <Landing />
  </React.Fragment>
);

export default IndexPage;
