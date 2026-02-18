import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "react-router-dom";
// description, title, stack, url, image, index
const Projects = ({ title, showLink, limit }) => {
  const projects = [
    {
      id: "0",
      title: "Mirage Perfume – Luxury Fragrance E-Commerce Store",
      description:
        "Developed a premium Shopify store for a luxury perfume brand, focusing on elegant UI, smooth user experience, and optimized product presentation to enhance conversions and brand identity.",
      url: "https://mirageperfume.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/mirage.jpg?v=1771438030",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Javascript" },
        { id: "3", title: "CSS" },
        { id: "4", title: "JQuery" },
        { id: "5", title: "Liquid" },
      ],
    },
    {
      id: "1",
      title: "ProLon Life – Health & Nutrition E-Commerce",
      description:
        "Built and optimized a health-focused Shopify store with structured product information, subscription integrations, and performance optimization for high-conversion funnels.",
      url: "https://prolonlife.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/prolon.jpg?v=1771438031",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "2",
      title: "L-Nutra Health – Nutrition & Wellness Store",
      description:
        "Developed a scalable Shopify store for a nutrition brand, focusing on product clarity, conversion-driven layouts, and clean responsive design.",
      url: "https://l-nutrahealth.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/l-nutra-health.jpg?v=1771438031",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "3",
      title: "MoxieLash – Beauty & Cosmetics E-Commerce",
      description:
        "Enhanced a beauty brand Shopify store with interactive product sections, custom UI components, and optimized mobile shopping experience.",
      url: "https://www.moxielash.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/moxie.jpg?v=1771438031",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Javascript" },
        { id: "3", title: "Liquid" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "4",
      title: "Leava Cosmetics – Skincare Brand Store",
      description:
        "Designed and developed a modern Shopify storefront for a skincare brand, improving brand storytelling and optimizing product display for higher engagement.",
      url: "https://leavacosmetics.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/leava.jpg?v=1771438031",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "5",
      title: "Medterra CBD – Wellness E-Commerce Platform",
      description:
        "Contributed to a high-traffic CBD Shopify store by implementing performance enhancements, UX refinements, and scalable theme customizations.",
      url: "https://medterracbd.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/medterra.jpg?v=1771438030",
      stack: [
        { id: "1", title: "Shopify Plus" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "6",
      title: "Amare Perfume – Luxury Fragrance Brand",
      description:
        "Developed a visually immersive Shopify store for a premium perfume brand, integrating smooth animations and luxury-focused UI design.",
      url: "https://amareperfume.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/amare.jpg?v=1771438030",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "7",
      title: "Iconic Perfumes – German Fragrance Store",
      description:
        "Built and customized a Shopify store targeting the German market, implementing localization, optimized checkout flows, and structured product filtering.",
      url: "https://iconicperfumes.de/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/iconic.jpg?v=1771438031",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "8",
      title: "DogCare24 – Pet Supplies E-Commerce",
      description:
        "Developed a Shopify-based pet supply store with optimized navigation, product categorization, and responsive design for improved usability.",
      url: "https://dogcare24-shop.de/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/dogcare.jpg?v=1771438030",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "9",
      title: "Klimaanlagen24 – HVAC Equipment Store",
      description:
        "Customized a Shopify store for HVAC products with advanced filtering, technical product presentation, and conversion-focused UI enhancements.",
      url: "https://klimaanlagen24.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/klimaanlagen24.jpg?v=1771438030",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "10",
      title: "Rosa Oil – Organic Beauty Products",
      description:
        "Developed and optimized a Shopify store for organic oil and skincare products with focus on branding, performance, and clean UI layout.",
      url: "https://www.xn--rosaoil-dya.de/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/rose.jpg?v=1771438050",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "11",
      title: "PeptideHub – Health Supplements Store",
      description:
        "Built a Shopify store for peptide-based supplements with structured product education sections and optimized checkout for higher conversions.",
      url: "https://peptidehub.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/peptidehub.jpg?v=1771438050",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      id: "12",
      title: "Immunocine – Medical & Wellness Platform",
      description:
        "Developed a conversion-focused Shopify store for a medical wellness brand with optimized landing pages and high-performance frontend architecture.",
      url: "https://immunocine.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/immunocine.jpg?v=1771438049",
      stack: [
        { id: "1", title: "Shopify" },
        { id: "2", title: "Liquid" },
        { id: "3", title: "Javascript" },
        { id: "4", title: "CSS" },
      ],
    },
    {
      'id':'3',
      'title':'Growve',
      'description':'We generate growth in diverse ways: • Acquire brands and scale them up. • Innovate new products and brands. • Help others as an e-commerce agency.',
      'url':'https://www.growve.com/',
      'image':'https://cdn.shopify.com/s/files/1/0337/5077/7994/files/growve.jpg?v=1771438050',
      'stack':[
        {
          'id':'1',
          'title':'React'
        },
        {
          'id':'2',
          'title':'Javascript'
        },
        {
          'id':'3',
          'title':'CSS'
        },
        {
          'id':'4',
          'title':'TailwindCSS'
        }
      ]
    },
    {
      id: "13",
      title: "L-Nutra",
      description:
        "L-Nutra is a nutri-technology company dedicated to helping people increase their healthspan (healthy years of their lives) through fasting and nutrition with the launch of our first product The Fasting Mimicking Diet.",
      url: "https://l-nutra.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/lnutra.jpg?v=1771438049",
      stack: [
        {
          id: "1",
          title: "WordPress",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "TailwindCSS",
        },
        {
          id: "5",
          title: "JQuery",
        },
      ],
    },
    {
      id: "14",
      title: "Outcomes.  Not Opinions. | OutcomeMD.com",
      description: `Let OutcomeMD's fitness-tracker-like experience for the patient enhance their experience. Improve the health of your patients and the health of your business. Attract New Patients.`,
      url: "https://outcomemd.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/outcomemd.jpg?v=1771438049",
      stack: [
        {
          id: "1",
          title: "WordPress",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "TailwindCSS",
        },
        {
          id: "5",
          title: "JQuery",
        },
      ],
    },
    {
      id: "15",
      title: "Immunocine Cancer Center",
      description:
        "The Immunocine Cancer Center provides one of the most advanced Cancer Immunotherapies available. Backed by research and multiple clinical trials, the Immunocine Treatment is meant for the cancer patients of today seeking the cancer treatment of tomorrow.",
      url: "https://immunocine.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/immunocine.jpg?v=1771438049",
      stack: [
        {
          id: "1",
          title: "WordPress",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "TailwindCSS",
        },
        {
          id: "5",
          title: "JQuery",
        },
      ],
    },
    {
      id: "16",
      title: "Marketing DNA | Marketing Services | Shopify",
      description:
        "Marketing DNA, we’re full service which means we’ve got you covered from start to finish for all your marketing services. Dedicated to creating uniquely your services programs and building a long-lasting relationship.",
      url: "https://marketingdna.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/marketingdna.jpg?v=1771438050",
      stack: [
        {
          id: "1",
          title: "Shopify",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "JQuery",
        },
        {
          id: "5",
          title: "Liquid",
        },
      ],
    },
    {
      id: "17",
      title: "SickMarketing | Hire The Best",
      description:
        "Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.",
      url: "https://sickmktg.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/sickmktg.jpg?v=1771438050",
      stack: [
        {
          id: "1",
          title: "Shopify",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "JQuery",
        },
        {
          id: "5",
          title: "Liquid",
        },
      ],
    },
    {
      id: "18",
      title: "Shopified DNA",
      description:
        "Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.",
      url: "https://shopifieddna.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/shopifieddna.jpg?v=1771438049",
      stack: [
        {
          id: "1",
          title: "Shopify",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "JQuery",
        },
        {
          id: "5",
          title: "Liquid",
        },
      ],
    },
    {
      id: "19",
      title: "Planet Wolfe",
      description:
        "In this house, we build success, Brands, Pagespeed, Creative Services, analytics.",
      url: "https://planetwolfe.com/",
      image: "https://cdn.shopify.com/s/files/1/0337/5077/7994/files/planetwolfe.jpg?v=1771438049",
      stack: [
        {
          id: "1",
          title: "Shopify",
        },
        {
          id: "2",
          title: "Javascript",
        },
        {
          id: "3",
          title: "CSS",
        },
        {
          id: "4",
          title: "JQuery",
        },
        {
          id: "5",
          title: "Liquid",
        },
      ],
    },
  ];

  // const projects = [
  //   {
  //     'id':'0',
  //     'title':'Mirage Perfume – Luxury Fragrance E-Commerce Store',
  //     'description':'Developed a premium Shopify store for a luxury perfume brand, focusing on elegant UI, smooth user experience, and optimized product presentation to enhance conversions and brand identity.',
  //     'url':'https://mirageperfume.com/',
  //     'image':'mirage.png',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'2',
  //     'title':'ProLonLife – Health & Wellness E-Commerce Store',
  //     'description':'Developed a modern and user-friendly Shopify store for a wellness brand, focusing on intuitive navigation, engaging visuals, and optimized product presentation to elevate the online shopping experience.',
  //     'url':'https://prolonlife.com/',
  //     'image':'prolon.png',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'1',
  //     'title':'Medterra - Born in Nature. Backed by Science.',
  //     'description':'Medterra takes pride in providing our customers with the highest quality pure ingredients, grown and processed in the USA.',
  //     'url':'https://medterracbd.com/',
  //     'image':'medterra.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'3',
  //     'title':'Growve',
  //     'description':'We generate growth in diverse ways: • Acquire brands and scale them up. • Innovate new products and brands. • Help others as an e-commerce agency.',
  //     'url':'https://www.growve.com/',
  //     'image':'growve.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'React'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'TailwindCSS'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'4',
  //     'title':'L-Nutra',
  //     'description':'L-Nutra is a nutri-technology company dedicated to helping people increase their healthspan (healthy years of their lives) through fasting and nutrition with the launch of our first product The Fasting Mimicking Diet.',
  //     'url':'https://l-nutra.com/',
  //     'image':'lnutra.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'WordPress'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'TailwindCSS'
  //       },
  //       {
  //         'id':'5',
  //         'title':'JQuery'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'5',
  //     'title':'Outcomes.  Not Opinions. | OutcomeMD.com',
  //     'description':`Let OutcomeMD's fitness-tracker-like experience for the patient enhance their experience. Improve the health of your patients and the health of your business. Attract New Patients.`,
  //     'url':'https://outcomemd.com/',
  //     'image':'outcomemd.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'WordPress'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'TailwindCSS'
  //       },
  //       {
  //         'id':'5',
  //         'title':'JQuery'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'6',
  //     'title':'Immunocine Cancer Center',
  //     'description':'The Immunocine Cancer Center provides one of the most advanced Cancer Immunotherapies available. Backed by research and multiple clinical trials, the Immunocine Treatment is meant for the cancer patients of today seeking the cancer treatment of tomorrow.',
  //     'url':'https://immunocine.com/',
  //     'image':'immunocine.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'WordPress'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'TailwindCSS'
  //       },
  //       {
  //         'id':'5',
  //         'title':'JQuery'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'7',
  //     'title':'Marketing DNA | Marketing Services | Shopify',
  //     'description':'Marketing DNA, we’re full service which means we’ve got you covered from start to finish for all your marketing services. Dedicated to creating uniquely your services programs and building a long-lasting relationship.',
  //     'url':'https://marketingdna.com/',
  //     'image':'marketingdna.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'8',
  //     'title':'SickMarketing | Hire The Best',
  //     'description':'Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.',
  //     'url':'https://sickmktg.com/',
  //     'image':'sickmktg.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'9',
  //     'title':'Shopified DNA',
  //     'description':'Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.',
  //     'url':'https://shopifieddna.com/',
  //     'image':'shopifieddna.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   },
  //   {
  //     'id':'10',
  //     'title':'Planet Wolfe',
  //     'description':'In this house, we build success, Brands, Pagespeed, Creative Services, analytics.',
  //     'url':'https://planetwolfe.com/',
  //     'image':'planetwolfe.jpg',
  //     'stack':[
  //       {
  //         'id':'1',
  //         'title':'Shopify'
  //       },
  //       {
  //         'id':'2',
  //         'title':'Javascript'
  //       },
  //       {
  //         'id':'3',
  //         'title':'CSS'
  //       },
  //       {
  //         'id':'4',
  //         'title':'JQuery'
  //       },
  //       {
  //         'id':'5',
  //         'title':'Liquid'
  //       }
  //     ]
  //   }
  // ];

  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.slice(0, limit).map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
