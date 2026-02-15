import React from "react";
import { Helmet } from "react-helmet";
const SEO = ({ title, description }) => {
  const siteDesc = `Qaiser Abbas's portfolio`;
  const siteTitle = `Qaiser Abbas's portfolio`;
  const twitterUsername = "Qaiser_Abas";
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content='https://cdn.shopify.com/s/files/1/0337/5077/7994/files/qaiser-shopify.png?v=1771185157' />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`https://cdn.shopify.com/s/files/1/0337/5077/7994/files/qaiser-shopify.png?v=1771185157`} />
    </Helmet>
  );
};

export default SEO;
