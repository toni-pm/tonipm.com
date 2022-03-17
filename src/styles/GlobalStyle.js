import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};


  .demo7 {
    background-color: #1B1B1B;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .demo7-ball {
    width: 50px;
    height: 50px;
    border-radius: 99px;
    position: absolute;
    border: 1px solid lightblue;
  }
  

  html {
    width: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: var(--line-height);
    font-family: var(--font-family)

    * {
      filter: blur(5px) brightness(0.7);
      transition: var(--transition);
      pointer-events: none;
      user-select: none;
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

  ${TransitionStyles};
`;

export default GlobalStyle;
