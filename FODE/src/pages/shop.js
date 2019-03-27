import React from "react";
import Footer from "../components/Footer/Footer";
import ShopPreview from "../components/Shop/shopPreview";
import Form from "../components/Form/Form";
import {
  TitleShop,
  TitleWrapper,
  Fode,
  Circle,
  IntroWrapper
} from "../components/Shop/shopStyles";
import { Pattern } from "../GlobalCss/containers";
import { color } from "../GlobalCss/variables";
import patternLight from "../images/repeating-pattern.svg";
import shopTitle from "../images/shoptitle.svg";
import { Helmet } from "react-helmet"

const Shop = () => (
  <React.Fragment>
  <Helmet>
  <html lang="en"/>
  <title>Shop - Title Needed</title>
  <meta name="description" content="Description needed"></meta>
  <meta property="og:url" content="https://fode.org.uk"></meta>
  <meta property="og:type" content="website"></meta>
  <meta property="og:title" content="TBC"></meta>
  <meta property="og:image" content="tbc"></meta>
  <meta property="og:image:width" content="1200"></meta>
  <meta property="og:image:height" content="630"></meta>
  <meta property="og:description" content="TBC"></meta>
  <meta property="og:site_name" content="House of FODE"></meta>
  <meta name="twitter:card" content="summary"></meta>
  <meta name="twitter:site" content="@site_account"></meta>
  <meta name="twitter:url" content="https://example.com/page.html"></meta>
  <meta name="twitter:title" content="Content Title"></meta>
  <meta name="twitter:description" content="Content description less than 200 characters"></meta>
  <meta name="twitter:image" content="tbc"></meta>
  <script type="application/ld+json">{`
      {
          "@context": "http://schema.org",
          "@type": "ClothingStore",
          "name": "House of FODE",
          "description": "TBC",
          "image": "tbc",
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
    <Pattern bgColor={color.secondary} background={patternLight} padding>
      <TitleWrapper>
        <Fode src={shopTitle} alt="House of Fode Logo" />
        <Circle />
        <IntroWrapper>
          <TitleShop>
            Exisiting to deliver everything you need to look Fresh, Stylish and
            Fly!
          </TitleShop>
        </IntroWrapper>
        <ShopPreview />
      </TitleWrapper>
    </Pattern>
    <Form />
    <Footer />
  </React.Fragment>
);

export default Shop;
