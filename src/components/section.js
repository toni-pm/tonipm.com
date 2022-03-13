import * as React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  width: 80vw;
`

const Section = ({ children }) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section
