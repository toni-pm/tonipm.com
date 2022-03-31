import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 30px;
  padding: 20px;
  text-align: center;
  font-size: var(--fz-sm);
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>© {new Date().getFullYear()} | Powered by <a className='default' href='https://tonipm.com'>Toni PM</a></div>
    </StyledFooter>
  )
}

export default Footer
