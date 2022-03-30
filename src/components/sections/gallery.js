import React from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import Gallery from '@browniebroke/gatsby-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { galleryCaptions } from 'config'

const StyledSection = styled.section`
  max-width: 900px;
`

const GallerySection = () => {
  const { t } = useTranslation()
  const data = useStaticQuery(graphql`
        query {
            allFile(filter: {
                extension: {eq: "jpg"},
                relativeDirectory: {eq: "gallery"}
              })
            {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            thumb: gatsbyImageData(
                                width: 300
                                height: 200
                                placeholder: BLURRED
                            )
                            full: gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    `)
  const images = data.allFile.edges.map(node => {
    node.node.childImageSharp.caption = t(galleryCaptions[node.node.relativePath.split('/')[1]])
    return node.node.childImageSharp
  })

  return (
    <Fade right duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='gallery'>
        <h2><Trans>Gallery</Trans></h2>

        <div className='inner'>
          <Gallery images={images} />
        </div>
      </StyledSection>
    </Fade>
  )
}

export default GallerySection
