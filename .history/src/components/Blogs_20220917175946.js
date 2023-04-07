import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from 'react-router-dom';

export const Blogs = ({ title, showLink }) => {
  const blogs = [
    {
      'id': '1',
      'title':'What is React',
      'date':'Feb 15 2021',
      'category':'React',
      'desc':`React is a JavaScript library for building user interfaces. It's used by large organizations like Facebook, Twitter, and Netflix. But what does that mean? Let's break it down!`,
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
