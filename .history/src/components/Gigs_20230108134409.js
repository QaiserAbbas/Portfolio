import React from "react"
import { SiSemanticuireact } from "react-icons/si";
import { FaAppStore, FaShopify, FaWordpress } from "react-icons/fa";



const Gigs = () => {
  const jobs = [
    {
      'id':'1',
      'company':'Infinity Creatives LLC',
      'position':'Senior Web Developer',
      'date':'Feb 2018 - Present',
      'desc':[
        
        {
          'id':'1',
          'name':'Identify user and system requirements for new websites and applications'
        },
        {
          'id':'2',
          'name':'Developing new user-facing features'
        },
        {
          'id':'3',
          'name':'Build reusable code and libraries for future use'
        },
        {
          'id':'4',
          'name':'Ensure the technical feasibility of UI/UX designs'
        },
        {
          'id':'5',
          'name':'Optimize application for maximum speed and scalability'
        }

      ]
    },
    {
      'id':'2',
      'company':'GLEETECH PAKISTAN',
      'position':'Team Lead iOS Developer',
      'date':'May 2016 - Feb 2018',
      'desc':[
        
        {
          'id':'1',
          'name':'Team Management & assigning tasks to team members'
        },
        {
          'id':'2',
          'name':'Expertise in Offline First & Data Syncing'
        },
        {
          'id':'3',
          'name':'Local Data Persistence Using Sqlite & Core Data'
        },
        {
          'id':'4',
          'name':'Realtime Communications Using Socket IO & WebSockets'
        },
        {
          'id':'5',
          'name':'Air Print & 3rd Party Printing Devices Integrations'
        },
        {
          'id':'6',
          'name':'Async & Multithreading Task Composition Using GDC'
        }

      ]
    },
    {
      'id':'3',
      'company':'BIR AL SABIA TECHNOLOGIES',
      'position':'Senior iOS Developer',
      'date':'Aug 2015 - May 2016',
      'desc':[
        
        {
          'id':'1',
          'name':'In App purchases and Payments Integrations'
        },
        {
          'id':'2',
          'name':'Expertise in Offline First & Data Syncing'
        },
        {
          'id':'3',
          'name':'Local Data Persistence Using Sqlite & Core Data'
        },
        {
          'id':'4',
          'name':'Google Maps & Navigation APIs'
        },
        {
          'id':'5',
          'name':'Multi-Users Chat & Text Communications Interactive Stickers and Emojis'
        },
        {
          'id':'6',
          'name':'Async & Multithreading Task Composition Using GDC'
        }

      ]
    },
    {
      'id':'4',
      'company':'SWENGGCO SOFTWARE',
      'position':'iOS Developer',
      'date':'Feb 2012 - July 2015',
      'desc':[
        
        {
          'id':'1',
          'name':'Backend As Service using Parse & Firebase'
        },
        {
          'id':'2',
          'name':'In App purchases and Payments Integrations'
        },
        {
          'id':'3',
          'name':'Local Data Persistence Using Sqlite & Core Data'
        },
        {
          'id':'4',
          'name':'Cloud Functions, Cloud Jobs'
        },
        {
          'id':'5',
          'name':'Social Media Integrations Facebook/Twitter Facebook'
        }
      ]
    }
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
