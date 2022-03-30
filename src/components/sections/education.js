import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import TabsStyles from 'styles/TabsStyles'
import Gallery from '@browniebroke/gatsby-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const StyledSection = styled.section`
  max-width: 900px;
`

const Education = () => {
  const { language } = useI18next()
  const data = useStaticQuery(graphql`
      query {
        education: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/education/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                lang
                name
                location
                range
                gallery {
                  caption
                  img {
                    childImageSharp {
                      thumb: gatsbyImageData(
                        width: 270
                        height: 200
                        placeholder: BLURRED
                      )
                      full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  const educationData = data.education.edges.filter(edge => edge.node.frontmatter.lang === language)

  const selectTab = (btnTab, tabN) => {
    const tabcontent = document.getElementsByClassName('tabcontent-education')
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    const tablinks = document.getElementsByClassName('tablinks-education')
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    const elTab = document.getElementById(`education-${tabN}`)
    if (elTab) {
      elTab.style.display = 'block'
    }
    if (btnTab) {
      btnTab.className += ' active'
    }
  }

  useEffect(() => {
    const btnTab = document.getElementById('btn-tab-education-0')
    selectTab(btnTab, 0)
  }, [])

  return (
    <Fade left duration={800} easing='cubic-bezier(0.5, 0, 0, 1)' distance='50px'>
      <StyledSection id='education'>
        <h2><Trans>Education</Trans></h2>
        <div className='inner'>
          <TabsStyles className='tabs'>
            <div class='tab'>
              {educationData &&
                educationData.map(({ node }, i) => {
                  const { name } = node.frontmatter
                  return (
                    <button class='tablinks tablinks-education' id={`btn-tab-education-${i}`} key={i} onClick={e => selectTab(e.currentTarget, i)}>{name}</button>
                  )
                })}
            </div>

            <div className='tabcontents'>
              {educationData &&
                educationData.map(({ node }, i) => {
                  const { frontmatter, html } = node
                  const { name, location, range, gallery } = frontmatter
                  let images = []
                  if (gallery) {
                    images = gallery.map((node) => {
                      const image = node.img.childImageSharp
                      image.caption = node.caption
                      return image
                    })
                  }

                  return (
                    <div class='tabcontent tabcontent-education' key={i} id={`education-${i}`}>
                      <h3>{name}</h3>
                      <p className='location'>{location}</p>
                      <p className='range'>{range}</p>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                      <div className='gallery'><Gallery className='gallery' images={images} /></div>
                    </div>
                  )
                })}
            </div>
          </TabsStyles>
        </div>
      </StyledSection>
    </Fade>
  )
}

export default Education
