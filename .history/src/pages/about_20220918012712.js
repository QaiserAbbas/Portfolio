import { React, Image } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import SEO from "../components/SEO";
import mainImage from "../assets/hero-img.png";

const About = () => {
  const info = `Hi, I'm Qaiser, and I develop modern, robust, fast-loading, easy to manage sites using Shopify, WordPress, custom HTML/CSS/JS/ReactJs.

  I'm confident with:
  ✅ development/customization of Shopify and Woocommerce online stores;
  ✅ building Shopify / WordPress websites from scratch;
  ✅ developing Shopify / WordPress custom themes;
  ✅ easy to use WordPress / Shopify admin dashboards;
  ✅ responsive landing pages development;
  ✅ modern, SEO-friendly, and semantic HTML markup.
  
  💪 My strong points are modern approaches to development, honesty, and punctuality.
  🎯 My primary goals are to meet your needs and deadline.
  
  My experience and strongest skills:
  
  ✔ Shopify
  ✔ Wordpress + Woocommerce
  ✔ HTML / CSS / SCSS / Tailwind
  ✔ JavaScript / jQuery
  ✔ Responsive web-layouts development
  ✔ Figma, Zeplin, InVision, UXPin, Basics of Photoshop
  ✔ React.JS + Redux + Firebase
  
  I look forward to hearing from you - let's bring your ideas to life!
  
  `;
  const stack = [];

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
                <li></li>
                Shopify
✔ Wordpress + Woocommerce
✔ HTML / CSS / SCSS / Tailwind
✔ JavaScript / jQuery
✔ Responsive web-layouts development
✔ Figma, Zeplin, InVision, UXPin, Basics of Photoshop
✔ React.JS + Redux + Firebase
              </ul>
              <p>
                Got an idea of a brand new iOS app? Or you want to add some
                features to your existing app? I look forward to hearing from
                you - let's bring your ideas to code!
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
