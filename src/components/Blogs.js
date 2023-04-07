import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from 'react-router-dom';
import blogs from "../constants/blogs"

export const Blogs = ({ title, showLink, limit }) => {
  
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.slice(0, limit).map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blogs" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
