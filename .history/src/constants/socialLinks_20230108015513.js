import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

import { FaCode, FaShopify, FaAppStore } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaCode className="social-icon"></FaCode>,
    url: "https://web.facebook.com/Qaiser.Abbas.67",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/qaiserabbas2/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/qaiser_abas/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/Qaiser_Abas",
  },
];
const links = data.map((link) => {
  const { id, icon, url } = link;

  return (
    <li key={id}>
      <a href={url} >
        {icon}
      </a>
    </li>
  );
});

const SocialLinks = ({ styleClass }) => {
  return (
    <ul >{links}</ul>
  );
};
export default SocialLinks;
