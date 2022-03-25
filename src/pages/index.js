import React, { useState } from 'react'
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GlobalStyle } from 'styles';
import { Layout, Nav, About, Contact, Education, Experience, Skills, Gallery, Testimonials, Hero, Footer } from 'components'

const IndexPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <GlobalStyle />
      <main>
        <title>Toni PM</title>

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
`;