import { css } from 'styled-components';

const variables = css`
  :root {
    --primary: #9fef00;
    --bg-color: #20202d;
    --title-color: #f0f0f4;
    --text-color: #c3c3d5;
    --nav-bg-color: #181822;
    --nav-bg-color-mobile: #181818ee;
    --nav-color: #ccc;
    --nav-color-hover: var(--primary);
    --line-height: 1.5;
    --font-family: -apple-system, Roboto, sans-serif, serif;

    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
