import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h5>
          copyright&copy;{new Date().getFullYear()}
          <span> Infinity Creatives </span> all rights reserved
        </h5>
      </div>
    </footer>
  )
}

export default Footer
