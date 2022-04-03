import React from 'react'
import { graphql } from 'gatsby'
import { GlobalStyle } from 'styles'
import { Layout, Nav, About, Contact, Education, Experience, Skills, Gallery, Testimonials, Hero, Footer, Seo } from 'components'

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <main>
        <Seo />
        <Nav />
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </Layout>
      </main>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
