import {React} from "react"
import PropTypes from "prop-types"
import { FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, stack, url, image, index }) => {
  return (
    <article className="project">
      {image && 
      <div className="project-img">
        <img alt="project-img" src={require(`../images/${image}`)} style={{width: '100%', height:'100%', objectFit:'cover'}} />
      </div>
      }
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
