import React from "react"
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaSkype className="social-icon"></FaSkype>,
    url: "https://join.skype.com/invite/jrfjXssIRha1",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/qaiserabbas2/",
  },
  {
    id: 3,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://twitter.com/Qaiser_Abas",
  },
  {
    id: 4,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://web.facebook.com/Qaiser.Abbas.67",
  },
  {
    id: 5,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/qaiser_abas/",
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a target="_blank" href={link.url} className="social-link-2" rel="noreferrer" >
        {link.icon}
      </a>
    </li>
  );
})

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
export default SocialLinks