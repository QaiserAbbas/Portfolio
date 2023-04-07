import React from "react"
import { SiSemanticuireact } from "react-icons/si";
import { FaAppStore, FaShopify, FaWordpress } from "react-icons/fa";



const Gigs = () => {
  const jobs = [
    {
      id: "1",
      title: "React Projects",
      icon: <SiSemanticuireact />,
      url: "https://www.fiverr.com/qaiserabbas/develop-your-reactjs-web-app-as-react-js-developer",
    },
    {
      id: "2",
      title: "Wordpress Projects",
      icon: <FaWordpress />,
      url: "https://www.fiverr.com/qaiserabbas/design-redesign-or-customize-a-responsive-wordpress-website",
    },
    {
      id: "3",
      title: "Shopify Projects",
      icon: <FaShopify />,
      url: "https://www.fiverr.com/qaiserabbas/do-elegant-responsive-shopify-store-expert-shopify-theme-developer-2392",
    },
    {
      id: "4",
      title: "Wordpress Projects",
      icon: <FaAppStore />,
      url: "https://www.fiverr.com/qaiserabbas/develop-elegant-ios-app-in-swift-or-objective-c",
    },
  ];

  return (
    <div className="gigs-section">
      <div className="gigs-profile-container">
        <a href="https://www.fiverr.com/qaiserabbas">
          <img alt="hero-img" src={mainImage} className="hero-img" />
        </a>
      </div>
      <h4 className="for-orders">For Orders</h4>
      <ul className="social-links">
        {jobs.map((item, index) => {
          return (
            <li key={item.id}>
              <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="social-link-2"
              >
                <p>{item.title}</p>

                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gigs
