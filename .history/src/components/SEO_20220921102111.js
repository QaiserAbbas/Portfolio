import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../assets/hero-img.png";
const SEO = ({ title, description }) => {
  const siteDesc = `Qaiser Abbas's portfolio`;
  const siteTitle = `Qaiser Abbas's portfolio`;
  const siteUrl = `https://qaiserabbas.netlify.app/`;
  const twitterUsername = "Qaiser_Abas";
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={Logo} />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${Logo}`} />
    </Helmet>
  );
};

export default SEO;
