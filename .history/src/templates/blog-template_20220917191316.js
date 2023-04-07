import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
// import ReactMarkdown from "react-markdown"
// import SEO from "../components/SEO"
// import { Link } from 'react-router-dom';

const ComponentName = () => {
  // const { content, title, desc } = data.blog
  const params = useParams();
  
console.log('props :>> ', params.slug);
  return (
    <Layout>
      <div>{params.slug}</div>
      {/* <SEO title={title} description={desc} /> */}
      {/* <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blogs" className="btn center-btn">
            blog
          </Link>
        </div>
      </section> */}
    </Layout>
  )
}
export default ComponentName
