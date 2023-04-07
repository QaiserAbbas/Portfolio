import { React } from "react";
import SocialLinks from "../constants/socialLinks";
import { Link } from "react-router-dom";
import mainImage from "../assets/hero-img.png";
import Typewriter from "typewriter-effect";
import { SiSemanticuireact } from "react-icons/si";
import { FaAppStore, FaShopify, FaWordpress } from "react-icons/fa";
const HeroV1 = () => {
  return (
    <header className="hero-v1">
      <div className="section-center hero-v1-center">
        <article className="hero-v1-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Qaiser Abbas</h1>
            <div style={{ height: "40px" }}>
              <Typewriter
                options={{
                  autoStart: true,
                  cursor: "",
                  cursorClassName: "",
                  delay: 75,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString(
                      '<h4 style="font-size: 22px;">Shopify Expert</h4>'
                    )

                    .pauseFor(1300)
                    .deleteAll()
                    .typeString(
                      '<h4 style="font-size: 22px;">Frontend Web Developer</h4>'
                    )
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString(
                      '<h4 style="font-size: 22px;">Wordpress Expert</h4>'
                    )
                    .pauseFor(1300)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
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
            <div>
              <Link to="/contact" className="btn">
                contact me
              </Link>
            </div>
            {/* <SocialLinks /> */}
          </div>
        </article>
        <img alt="hero-v1-img" src={mainImage} className="hero-v1-img" />
      </div>
    </header>
  );
};

export default HeroV1;
