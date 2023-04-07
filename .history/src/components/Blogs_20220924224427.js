import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from 'react-router-dom';

export const Blogs = ({ title, showLink }) => {
  const blogs = [
    {
      'id': '1',
      'title':'How to use Composer and Packagist in PHP',
      'date':'Feb 15 2021',
      'category':'React',
      'desc':`React is a JavaScript library that allows you to build user interfaces fast, without writing any code. It can also help your organization scale its development. It's used by large organizations like Facebook, Twitter, and Netflix. But what does that mean? Let's break it down!`,
      'slug':'what-is-react',
      'image':'react.png'
    },
    {
      'id': '2',
      'title':'What is React',
      'date':'March 10 2021',
      'category':'PHP',
      'desc':`Composer is the package manager of PHP.
      It allows you to easily install packages into your projects.
      Install it on your machine (Linux/Mac or Windows) and once you’re done you should have a composer command available on your terminal.`,
      'slug':'how-to-use-composer-php',
      'image':'php.png'
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
        <Link to="/blogs" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
