import React from "react"
import { FaCode, FaShopify, FaAppStore } from "react-icons/fa"
const Services = () => [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend Web Developer",
    text: ` As a software development service provider, I create custom web applications for numerous sectors and develop modern, robust, fast-loading, easy to manage sites using Shopify, WordPress, custom HTML/CSS/JS/ReactJs`,
  },
  {
    id: 2,
    icon: <FaShopify className="service-icon" />,
    title: "Shopify Development",
    text: `I will design your ecommerce site, configure it, upload your products, negotiate your shipping & online payment contracts, configure them and launch your website in record time.`,
  },
  {
    id: 3,
    icon: <FaAppStore className="service-icon" />,
    title: "Native IOS App Development",
    text: `Proficient in iOS development using Objective-C and Swift programming languages for iPhone, iPad and Apple Watch devices with 6+ years of experience. I can develops sophisticated back-end systems, and creates stunning user-friendly front-end interfaces. `,
  },
]

export default Services