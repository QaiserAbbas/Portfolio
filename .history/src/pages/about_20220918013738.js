import { React } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SEO from "../components/SEO";
import mainImage from "../assets/hero-img.png";

const About = () => {
  const stack = [
    {
      'id': "1",
      'title': "React"
    },
    {
      'id': "2",
      'title': "JavaScript"
    },
    {
      'id': "3",
      'title': "Gatsby.js"
    },
    {
      'id': "4",
      'title': "Next.js"
    },
    {
      'id': "5",
      'title': "jQuery"
    },
    {
      'id': "6",
      'title': "WordPress"
    },
    {
      'id': "7",
      'title': "CSS"
    },
    {
      'id': "8",
      'title': "TailwindCss"
    },
    {
      'id': "9",
      'title': "SWIFT"
    },
    {
      'id': "10",
      'title': "Objective C"
    }
  ];
  
  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <img alt="about-img" src={mainImage} className="about-img" />
          <article className="about-text">
            <Title title="About Me" />
            <div style={{height: '400px', overflowY: 'scroll'}}>
              <p>
                Hi, I'm <strong>Qaiser</strong>, and I develop modern, robust,
                fast-loading, easy to manage sites using{" "}
                <strong>Shopify, WordPress, custom HTML/CSS/JS/ReactJs.</strong>
              </p>
              <p>
                <strong>I'm confident with:</strong>
              </p>
              <p>
                I always pursue a long-term relationship with great clients.
              </p>
              <p>
                <strong>My expertise includes:</strong>
              </p>
              <ul style={{listStyle: 'disc'}}>
                <li>development/customization of Shopify and Woocommerce online stores</li>
                <li>building Shopify / WordPress websites from scratch</li>
                <li>developing Shopify / WordPress custom themes</li>
                <li>easy to use WordPress / Shopify admin dashboards</li>
                <li>responsive landing pages development</li>
                <li>modern, SEO-friendly, and semantic HTML markup.</li>
              </ul>
              <p><strong>My strong points</strong> are modern approaches to development, honesty, and punctuality.<p>
              </p><strong>My primary goals</strong> are to meet your needs and deadline.</p>
              <p><strong>My experience and strongest skills:</strong></p>
              <ul>
                <li>Shopify</li>
                <li>Wordpress + Woocommerce</li>
                <li>HTML / CSS / SCSS / Tailwind</li>
                <li>JavaScript / jQuery</li>
                <li>Responsive web-layouts development</li>
                <li>Figma, Zeplin, InVision, UXPin, Basics of Photoshop</li>
                <li>React.JS + Redux + Firebase</li>
              </ul>
              <p>
                I look forward to hearing from you - let's bring your ideas to life!
              </p>
            </div>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
