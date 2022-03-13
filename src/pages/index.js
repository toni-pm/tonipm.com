import * as React from 'react'
import { Layout, Nav, About, Contact, Experience, Skills, Main } from 'components'

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Toni PM</title>

      <Layout pageTitle='Home'>
        <Nav />
        <Main />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
    </main>
  )
}

export default IndexPage
