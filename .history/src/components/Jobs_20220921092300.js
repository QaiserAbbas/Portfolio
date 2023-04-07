import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from 'react-router-dom';



const Jobs = () => {
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
      'position':'Team Lead',
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
    }
  ];
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
