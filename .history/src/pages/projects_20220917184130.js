import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects title="All Projects" showLink />
      </section>
    </Layout>
  )
}

export default ProjectsPage
