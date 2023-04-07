import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export default ProjectsPage
