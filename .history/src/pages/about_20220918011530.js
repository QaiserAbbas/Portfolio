import {React, Image} from 'react';
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"
import mainImage from '../assets/hero-img.png'

const About = () => {
  const info = ``;
  const stack = [];

  return (
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <img alt="about-img" src={mainImage} className="about-img"/>
          <article className="about-text">
            <Title title='About Me' />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About
