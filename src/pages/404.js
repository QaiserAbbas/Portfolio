import React from 'react';
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Layout>
      <SEO title="Dead End" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
