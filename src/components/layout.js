import * as React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  min-height: 100vh;
  padding: 0rem 3rem 0rem 13rem;

  @media (max-width: 768px) {
    padding: 0 2rem 0rem 2rem;
  }
`

const Layout = ({ pageTitle, children }) => {
  return (
    <StyledLayout>
      <main>
        {pageTitle && (<h1>{pageTitle}</h1>)}
        {children}
      </main>
    </StyledLayout>
  )
}
export default Layout
