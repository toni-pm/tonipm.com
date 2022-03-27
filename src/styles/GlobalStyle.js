import { createGlobalStyle } from 'styled-components'
import TransitionStyles from './TransitionStyles'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: var(--line-height);
    font-family: var(--font-family);
    font-size: var(--fz-xl);

    * {
      /*filter: blur(5px) brightness(0.7);
      transition: var(--transition);
      pointer-events: none;
      user-select: none;*/
    }
  }
  
  svg {
    stroke: var(--nav-color);

    &.path {
      fill: white;
    }

    &.feather {
      fill: none;
    }

    &:hover {
      stroke: var(--nav-color-hover)
    }
  }

  h2 {
    color: var(--title-color);
  }

  h1, h2, h3 {
    margin: 5px 0;
  }

  h2 {
    font-size: clamp(25px, 4.5vw, 40px);
  }

  h3 {
    font-size: clamp(20px, 4vw, 30px);
  }

  section {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 60px 5vw;
    margin: 0 auto;
  }

  p {
    max-width: 700px;
    text-align: justify;
  }

  a.default {
    text-decoration: none;
    color: var(--primary);
    padding: 5px 0;
    transition: all 200ms ease-in;
    position: relative;

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: var(--primary);
      height: 2px;
      transition: all 0.2s ease-in;
    }

    :hover {
      color: var(--nav-color-hover);
      ::after {
        width: 100%;
      }
    }
  }
  
  .btn {
    background-color: var(--gray) !important;
    color: var(--white);
    font-size: var(--fz-lg);
    padding: 1em 1.5em;
    text-decoration: none;
    text-align: center;
    transition: var(--transition);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;

    i {
      margin-right: 10px;
    }
  
    &:hover {
      color: var(--primary);
      background-color: var(--gray-light) !important;
    }
    
    &:active {
      background-color: black;
    }
    
    &:visited {
      background-color: #ccc;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 0;
      margin-bottom: 100px;
    }
  }

  .inner {
    width: 100%;
  }

  ${TransitionStyles};
`

export default GlobalStyle
