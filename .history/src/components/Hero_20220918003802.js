import { React} from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from 'react-router-dom';
import mainImage from '../assets/hero-img.png'
const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Qaiser Abbas</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img src={mainImage} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
