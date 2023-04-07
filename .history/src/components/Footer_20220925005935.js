import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4 style={{fontSize: '14px', textTransform: 'uppercase'}}>
          copyright&copy;{new Date().getFullYear()}
          <span> Infinity Creatives </span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
