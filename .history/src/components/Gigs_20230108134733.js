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
      <ul className="social-links">
        {jobs.map((item, index) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
              <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="social-link-2"
              >
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <h4 className="for-orders">For Orders</h4>
      <ul className="social-links">
        <li key="1">
          <p>React Projects</p>
          <a
            href="https://www.fiverr.com/qaiserabbas/develop-your-reactjs-web-app-as-react-js-developer"
            rel="noreferrer"
            target="_blank"
            className="social-link-2"
          >
            <SiSemanticuireact />
          </a>
        </li>
        <li key="2">
          <p>Wordpress Projects</p>
          <a
            href="https://www.fiverr.com/qaiserabbas/design-redesign-or-customize-a-responsive-wordpress-website"
            rel="noreferrer"
            target="_blank"
            className="social-link-2"
          >
            <FaWordpress />
          </a>
        </li>
        <li key="3">
          <p>Shopify Projects</p>
          <a
            href="https://www.fiverr.com/qaiserabbas/do-elegant-responsive-shopify-store-expert-shopify-theme-developer-2392"
            rel="noreferrer"
            target="_blank"
            className="social-link-2"
          >
            <FaShopify />
          </a>
        </li>
        <li key="3">
          <p>iOS Projects</p>
          <a
            href="https://www.fiverr.com/qaiserabbas/develop-elegant-ios-app-in-swift-or-objective-c"
            target="_blank"
            rel="noreferrer"
            className="social-link-2"
          >
            <FaAppStore />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Gigs
