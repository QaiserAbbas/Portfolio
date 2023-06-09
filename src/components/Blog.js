import {React} from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <a target="_blank" href={`${slug}`} className="blog" key={id} rel="noreferrer">
      <article>
        {image && (
          <img alt="blog-img" src={require(`../images/${image}`)} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog
