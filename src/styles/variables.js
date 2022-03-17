import { css } from 'styled-components';

const variables = css`
  :root {
    --green: #9fef00;
    --primary: var(--green);
    --bg-color: #222222;
    --text-color: #fff;
    --nav-bg-color: #181818;
    --nav-color: #ccc;
    --nav-color-hover: var(--primary);
    --line-height: 1.3;
    --font-family: -apple-system, Roboto, sans-serif, serif;

    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
