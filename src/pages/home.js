import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/HeroV1";
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
      <Projects title="featured projects" showLink limit="3"/>
      <Blogs title="latest articles" showLink limit="3"/>
    </Layout>
  );
};

export default home;
