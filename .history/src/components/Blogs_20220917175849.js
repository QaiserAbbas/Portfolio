import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from 'react-router-dom';

export const Blogs = ({ title, showLink }) => {
  const blogs = [
    {
      'id': '1',
      'title':'What is React',
      'date':'',
      'category':'',
      'desc':'',
      'slug':'',
      'image':''
    }
  ]
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
