import { css } from 'styled-components'

const variables = css`
  :root {
    --white: #e6f1ff;
    --gray: #444;
    --gray-light: #666;
    --primary: #9fef00;
    --secondary: #334d00;
    --bg-color: #20202d;
    --bg-color-hover: #35354b;
    --title-color: #f0f0f4;
    --text-color: #c3c3d5;
    --light-slate: #a8b2d1;
    --nav-bg-color: #181822;
    --nav-bg-color-mobile: #181818ee;
    --nav-color: #ccc;
    --nav-color-hover: var(--primary);
    --shadow: #181822dd;
    --line-height: 1.5;
    
    --font-family: -apple-system, Roboto, sans-serif, serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 22px;
    --fz-xxl: 24px;
    --fz-heading: 32px;
    
    --border-radius: 6px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
