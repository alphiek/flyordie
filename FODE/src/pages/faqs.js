import React from "react";
import FaqSection from "../components/Faq/FaqSection";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import { Helmet } from "react-helmet"

const FaqPage = () => (
  <React.Fragment>
  <Helmet>
    <html lang="en"/>
    <title>This is the Faqs page</title>
    <meta name="description" content="A description of the page"></meta>
    <meta property="og:url" content="https://example.com/page.html"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="Content Title"></meta>
    <meta property="og:image" content="https://example.com/image.jpg"></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta property="og:description" content="Description Here"></meta>
    <meta property="og:site_name" content="TBC"></meta>
    <meta name="twitter:card" content="summary"></meta>
    <meta name="twitter:site" content="@site_account"></meta>
    <meta name="twitter:url" content="https://example.com/page.html"></meta>
    <meta name="twitter:title" content="Content Title"></meta>
    <meta name="twitter:description" content="Content description less than 200 characters"></meta>
    <meta name="twitter:image" content="tbc"></meta>
  </Helmet>
    <FaqSection />
    <Form />
    <Footer />
  </React.Fragment>
);

export default FaqPage;
