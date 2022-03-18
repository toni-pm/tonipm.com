import React, { useState } from 'react'
import { GlobalStyle } from 'styles';
import { Layout, Nav, About, Contact, Education, Experience, Skills, Hero, Footer } from 'components'

const IndexPage = () => {
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
          <Contact />
          <Footer />
        </Layout>
      </main>
    </>
  )
}

export default IndexPage
