import { React } from "react";
import SocialLinks from "../constants/socialLinks";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Qaiser Abbas</h1>
            <div style={{height: '40px'}}>
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

                    .typeString('<h4 style="font-size: 22px;">Shopify Expert</h4>')

                    .pauseFor(1300)
                    .deleteAll()
                    .typeString('<h4 style="font-size: 22px;">Frontend Web Developer</h4>')
                    .pauseFor(1300)
                    .deleteAll()
                    .typeString('<h4 style="font-size: 22px;">Wordpress Expert</h4>')
                    .pauseFor(1300)
                    .deleteAll()
                    .start();
                }}
              />
              
            </div>
            {/* <h4>Shopify Expert | Frontend Web Developer | Wordpress Expert</h4> */}
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img alt="hero-img" src='https://cdn.shopify.com/s/files/1/0337/5077/7994/files/qaiser-shopify.png?v=1771185157' className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
