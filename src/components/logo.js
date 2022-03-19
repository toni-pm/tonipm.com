import React from 'react'
import styled from 'styled-components'

const LogoCSS = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  background: #9fef00;
  font-family: "Times New Roman", Times, serif;

  &:before {
    position: absolute;
    content: '';
  }

  &:before {
    top: 2px;  /* border width */
    left: 2px;  /* border width */
    height: calc(100% - 4px);  /* 100% - (2 * border width) */
    width: calc(100% - 4px);  /* 100% - (2 * border width) */
    background: #222222;
  }

  &, &:before {
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  &:hover:before {
    background: #333;
  }

  span {
    position: absolute;
    font-size: 2rem;
    top: 3px;
    left: 15px;
    color: #9fef00;
  }
`

const Logo = () => {
  return (
    <LogoCSS className='logo'>
      <span>T</span>
    </LogoCSS>
  )
}

export default Logo
