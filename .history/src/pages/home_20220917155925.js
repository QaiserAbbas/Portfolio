import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";

const home = () => {
  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects title="featured projects" showLink />
      {/* <Blogs title="latest articles" showLink /> */}
    // </Layout>
  );
};

export default home
