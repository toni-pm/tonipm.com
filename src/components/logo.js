import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => {
  return (
    <StaticImage
      src='../images/icon.png'
      height={300}
      alt='logo Toni tonipm'
    />
  )
}

export default Logo
