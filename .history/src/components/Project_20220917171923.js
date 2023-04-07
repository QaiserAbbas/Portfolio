import {React, Image} from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import MedterraImage from '../images/medterra.jpg'
const Project = ({ description, title, stack, url, image, index }) => {
  return (
    <article className="project">
      {image && (
        <img alt="project-img" src={MedterraImage} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          {/* <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a> */}
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
