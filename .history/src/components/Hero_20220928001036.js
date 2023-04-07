import { React } from "react";
import SocialLinks from "../constants/socialLinks";
import { Link } from "react-router-dom";
import mainImage from "../assets/hero-img.png";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Qaiser Abbas</h1>
            <div>
              <Typewriter
                options={{
                  cursor: "",
                  cursorClassName: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span style="color: #fff;">${content.heading}</span>`
                    )
                    .callFunction(() => {
                      SetshowSecondHeadline(true);
                    })
                    .start();
                }}
              />
              <Typewriter
                    options={{
                      autoStart: true,
                      cursor:"",
                      cursorClassName:"",
                      delay: 75,
                      loop: true,
                      strings: [
                        '<span style="color: #2797BC; ">Shopify Optimizations</span>',
                        '<span style="color: #2797BC; ">Shopping Carts</span>',
                        '<span style="color: #2797BC; ">Chat Bot</span>',
                        ],
                    }}
                  />
            </div>
            <h4>Shopify Expert | Frontend Web Developer | Wordpress Expert</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img alt="hero-img" src={mainImage} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
