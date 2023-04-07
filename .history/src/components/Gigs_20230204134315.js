import React from "react"
import { SiSemanticuireact } from "react-icons/si";
import { FaAppStore, FaShopify, FaWordpress } from "react-icons/fa";
import fiverrProfile from "../images/fiverr-profile.png";
import upworkProfile from "../images/upwork-profile.png";



const Gigs = () => {
  const jobs = [
    {
      id: "1",
      title: "ReactJs Expert",
      icon: <SiSemanticuireact />,
      url: "https://www.fiverr.com/qaiserabbas/react-reactjs-react-developer-front-end-developer-javascript-react-website",
    },
    {
      id: "2",
      title: "Shopify Expert",
      icon: <FaShopify />,
      url: "https://www.fiverr.com/qaiserabbas/shopify-expert-shopify-developer-shopify-bug-fix-shopify-design-dropshipping",
    },
    {
      id: "3",
      title: "Wordpress Expert",
      icon: <FaWordpress />,
      url: "https://www.fiverr.com/qaiserabbas/wordpress-website-wordpress-developer-website-design-website-development",
    },
    {
      id: "4",
      title: "iOS App Developer",
      icon: <FaAppStore />,
      url: "https://www.fiverr.com/qaiserabbas/develop-elegant-ios-app-in-swift-or-objective-c",
    },
  ];

  return (
    <div className="gigs-section">
      {/* <div className="gigs-profile-container">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.fiverr.com/qaiserabbas"
        >
          <img
            alt="hero-img"
            src={fiverrProfile}
            className="gigs-profile-img"
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.upwork.com/freelancers/~0105f728aec1b249cd"
        >
          <img
            alt="hero-img"
            src={upworkProfile}
            className="gigs-profile-img"
          />
        </a>
      </div> */}
      {/* <h4 className="for-orders">To Place Orders</h4> */}
      <ul className="social-links">
        {jobs.map((item, index) => {
          return (
            <li key={item.id}>
              <div
                href="/"
                rel="noreferrer"
                className="social-link-2"
              >
                <p>{item.title}</p>

                {item.icon}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gigs
