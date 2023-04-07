import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from 'react-router-dom';
// description, title, stack, url, image, index
const Projects = ({ title, showLink, limit }) => {
  const projects = [
    {
      'id':'1',
      'title':'Medterra - Born in Nature. Backed by Science.',
      'description':'Medterra takes pride in providing our customers with the highest quality pure ingredients, grown and processed in the USA.',
      'url':'https://medterracbd.com/',
      'image':'medterra.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'2',
      'title':'ProLon® | Fasting Nutrition Program | Fasting with Food – ProLon® Fast',
      'description':'ProLon Fasting Nutrition Program is a perfectly planned 5-day meal kit to provide your body with nourishment while keeping it in a fasting state. Benefit from cellular renewal, metabolic health support, a fast start to weight loss, and more. Fasting has never been easier or more convenient.',
      'url':'https://prolonfast.com/',
      'image':'prolon.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'3',
      'title':'Growve',
      'description':'We generate growth in diverse ways: • Acquire brands and scale them up. • Innovate new products and brands. • Help others as an e-commerce agency.',
      'url':'https://www.growve.com/',
      'image':'growve.jpg',
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
      'id':'4',
      'title':'L-Nutra',
      'description':'L-Nutra is a nutri-technology company dedicated to helping people increase their healthspan (healthy years of their lives) through fasting and nutrition with the launch of our first product The Fasting Mimicking Diet.',
      'url':'https://l-nutra.com/',
      'image':'lnutra.jpg',
      'stack':[
        {
          'id':'1',
          'title':'WordPress'
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
        },
        {
          'id':'5',
          'title':'JQuery'
        }
      ]
    },
    {
      'id':'5',
      'title':'Outcomes.  Not Opinions. | OutcomeMD.com',
      'description':`Let OutcomeMD's fitness-tracker-like experience for the patient enhance their experience. Improve the health of your patients and the health of your business. Attract New Patients.`,
      'url':'https://outcomemd.com/',
      'image':'outcomemd.jpg',
      'stack':[
        {
          'id':'1',
          'title':'WordPress'
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
        },
        {
          'id':'5',
          'title':'JQuery'
        }
      ]
    },
    {
      'id':'6',
      'title':'Marketing DNA | Marketing Services | Shopify',
      'description':'Marketing DNA, we’re full service which means we’ve got you covered from start to finish for all your marketing services. Dedicated to creating uniquely your services programs and building a long-lasting relationship.',
      'url':'https://marketingdna.com/',
      'image':'marketingdna.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'7',
      'title':'SickMarketing | Hire The Best',
      'description':'Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.',
      'url':'https://sickmktg.com/',
      'image':'sickmktg.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'8',
      'title':'Shopified DNA',
      'description':'Hire the best Marketing Team, Page Optimization Team, SEO Team, Data Analytics Team, Design Team.',
      'url':'https://shopifieddna.com/',
      'image':'shopifieddna.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'9',
      'title':'Planet Wolfe',
      'description':'In this house, we build success, Brands, Pagespeed, Creative Services, analytics.',
      'url':'https://planetwolfe.com/',
      'image':'planetwolfe.jpg',
      'stack':[
        {
          'id':'1',
          'title':'Shopify'
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
          'title':'JQuery'
        },
        {
          'id':'5',
          'title':'Liquid'
        }
      ]
    },
    {
      'id':'10',
      'title':'L-Nutra',
      'description':'L-Nutra is a nutri-technology company dedicated to helping people increase their healthspan (healthy years of their lives) through fasting and nutrition with the launch of our first product The Fasting Mimicking Diet.',
      'url':'https://l-nutra.com/',
      'image':'lnutra.jpg',
      'stack':[
        {
          'id':'1',
          'title':'WordPress'
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
        },
        {
          'id':'5',
          'title':'JQuery'
        }
      ]
    }
  ];
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.slice(0, limit).map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
