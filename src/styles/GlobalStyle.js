import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables};

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
    font-family: var(--font-family);

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

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0 0 0 5vw;
  }

  p {
    max-width: 700px;
    text-align: justify;
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

  .skills {
    width: 100%;
    background-color: #ddd;
  }

  .skills-inner {
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    background-color: #04AA6D;
  }
  
  .react-tabs {
    display: flex;
  }

  .react-tabs__tab-list {  
    display: flex;
    flex-direction: column;
    width: 200px;
    border: none;
  }

  .react-tabs__tab {
    padding: 12px 20px;
    border-left: 4px solid var(--bg-color);

    &:hover {
      background: var(--bg-color-hover);
      border-left: 4px solid var(--bg-color-hover);
    }

    &:focus:after {
      content: none;
    }

    &.react-tabs__tab--selected {
      background: var(--bg-color-hover);
      border-color: var(--bg-color-hover);
      border-left: 4px solid var(--primary);
      color: white;
      border-radius: 0px;
    }
  }

  .react-tabs__tab-panel {
    padding: 30px
  }

  @media (max-width: 768px) {
    .react-tabs {
      display: block;
    }

    .react-tabs__tab-list {  
      display: flex;
      flex-direction: row;
      overflow: auto hidden;
      width: 100%;
    }
    
    .react-tabs__tab { 
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  ${TransitionStyles};
`;

export default GlobalStyle;
