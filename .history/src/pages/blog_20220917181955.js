import React from "react"
import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}
export default Blog
