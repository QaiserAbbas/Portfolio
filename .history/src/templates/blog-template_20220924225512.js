import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
// import ReactMarkdown from "react-markdown"
// import SEO from "../components/SEO"
// import { Link } from 'react-router-dom';
import blogs from "../constants/blogs"

const ComponentName = () => {
  // const { content, title, desc } = data.blog
  const params = useParams();
  
console.log('props :>> ', params.slug);
console.log('blogs :>> ', blogs);
const blog = blogs.find((element) => {
  return element.slug === params.slug;
})
console.log('blog :>> ', blog);

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: params.desc }}></div>
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
