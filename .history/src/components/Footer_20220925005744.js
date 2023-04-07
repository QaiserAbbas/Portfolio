import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <p>
          copyright&copy;{new Date().getFullYear()}
          <span> Infinity Creatives </span> all rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
