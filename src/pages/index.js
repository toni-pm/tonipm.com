import * as React from 'react'
import { GlobalStyle } from 'styles';
import { Layout, Nav, About, Contact, Experience, Skills, Hero } from 'components'

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
          <Experience />
          <Contact />
        </Layout>
      </main>
    </>
  )
}

export default IndexPage
